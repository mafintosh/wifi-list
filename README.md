# wifi-list

List nearby wifi networks. Currently works on macOS only, using the built-in [`airport`](http://apple.stackexchange.com/questions/130923/is-there-a-built-in-command-line-utility-for-airport-and-other-wifi-networks) utility.

```
npm install wifi-list
```

## Usage

``` js
var wifi = require('wifi-list')

wifi(function (err, list) {
  if (err) throw err
  console.log(list)
})
```

Running the above will list nearby wifi networks.

``` js
[ { name: 'HomeBox-8C4D',
    bssid: '7c:03:d8:c9:8c:53',
    channel: 6,
    signal: -88,
    highThroughputMode: true,
    countryCode: 'DK',
    security: 'WPA2' },
  { name: 'gudme_5GHz',
    bssid: 'a4:2b:8c:8d:03:2b',
    channel: 112,
    signal: -93,
    highThroughputMode: true,
    countryCode: 'DE',
    security: 'WPA2' },
  { name: 'Riccos Staff',
    bssid: '38:f8:89:b0:37:75',
    channel: 100,
    signal: -64,
    highThroughputMode: true,
    countryCode: 'DE',
    security: 'WPA2' },
  { name: 'HUAWEI-E5730-AC13',
    bssid: '0c:96:bf:b3:ac:13',
    channel: 6,
    signal: -77,
    highThroughputMode: true,
    countryCode: null,
    security: 'WPA2' },
  { name: 'CHFInet',
    bssid: 'c0:ff:d4:84:64:70',
    channel: 3,
    signal: -69,
    highThroughputMode: true,
    countryCode: null,
    security: 'WPA2' },
  { name: 'gudme',
    bssid: 'a4:2b:8c:8d:03:2a',
    channel: 1,
    signal: -86,
    highThroughputMode: true,
    countryCode: null,
    security: 'WPA2' },
  { name: 'Riccos',
    bssid: '38:f8:89:b0:37:73',
    channel: 9,
    signal: -73,
    highThroughputMode: true,
    countryCode: null,
    security: 'WPA2' } ]
```

## License

MIT
