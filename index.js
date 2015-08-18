var proc = require('child_process')

module.exports = list

var OSX_AIRPORT = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -s'

function parseSecurity (sec) {
  if (/wpa2/i.test(sec)) return 'WPA2'
  if (/wpa/i.test(sec)) return 'WPA'
  if (/wep/i.test(sec)) return 'WEP'
  return null
}

function parseHT (ht) {
  return ht.toLowerCase() === 'y'
}

function parseCountryCode (cc) {
  cc = cc.toUpperCase()

  if (cc === '--') return null
  return cc
}

function list (cb) {
  if (process.platform !== 'darwin') throw new Error('Currently only OSX is supported')

  proc.exec(OSX_AIRPORT, function (err, stdout) {
    if (err) return cb(err)

    var valid = true
    var lines = stdout.split('\n')
    var header = lines.shift()

    var ssid = header.toLowerCase().indexOf('ssid') + 4
    var bssid = header.toLowerCase().indexOf('bssid') + 17
    var rssi = header.toLowerCase().indexOf('rssi') + 4
    var channel = header.toLowerCase().indexOf('channel') + 7
    var ht = header.toLowerCase().indexOf('ht') + 2
    var cc = header.toLowerCase().indexOf('cc') + 2
    var security = header.toLowerCase().indexOf('security')
    var filter = {}

    var wifis = lines
      .filter(function (line) {
        if (!valid) return false
        valid = !!line.trim()
        return valid
      })
      .map(function (line) {
        var name = line.slice(0, ssid).trim()
        var bss = line.slice(ssid, bssid).trim()
        var sig = line.slice(bssid, rssi).trim()
        var chan = line.slice(rssi, channel).trim()
        var htMode = line.slice(channel, ht).trim()
        var countryCode = line.slice(ht, cc).trim()
        var sec = parseSecurity(line.slice(security).trim())

        return {
          name: name,
          bssid: bss,
          channel: ~~chan,
          signal: ~~sig,
          highThroughputMode: parseHT(htMode),
          countryCode: parseCountryCode(countryCode),
          security: sec
        }
      })
      .filter(function (wifi) {
        if (filter[wifi.name]) return false
        filter[wifi.name] = true
        return true
      })

    cb(null, wifis)
  })
}
