var proc = require('child_process')

module.exports = list

var OSX_AIRPORT = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -s'

function parseSecurity (sec) {
  if (/wpa2/i.test(sec)) return 'WPA2'
  if (/wpa/i.test(sec)) return 'WPA'
  if (/wep/i.test(sec)) return 'WEP'
  return null
}

function list (cb) {
  if (process.platform !== 'darwin') throw new Error('Currently only OSX is supported')

  proc.exec(OSX_AIRPORT, function (err, stdout) {
    if (err) return cb(err)

    var valid = true
    var lines = stdout.split('\n')
    var header = lines.shift()

    var ssid = header.toLowerCase().indexOf('ssid') + 4
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
        var sec = parseSecurity(line.slice(security).trim())

        return {name: name, security: sec}
      })
      .filter(function (wifi) {
        if (filter[wifi.name]) return false
        filter[wifi.name] = true
        return true
      })

    cb(null, wifis)
  })
}
