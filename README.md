# wifi-list

List nearby wifi networks

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
[ { name: 'Camp2015', security: 'WPA2' },
  { name: 'Camp2015-open', security: null },
  { name: 'spacenet', security: 'WPA2' },
  { name: 'freifunk.net', security: null },
  { name: 'PirateBox', security: null },
  { name: 'ipredator.se', security: 'WPA2' },
  { name: 'Freifunk.Entropolis 2.4', security: null },
  { name: 'DIRECT-izML-2160 Series', security: 'WPA2' },
  { name: 'camp.binary-kitchen.de', security: 'WPA2' },
  { name: 'Blubb', security: 'WPA2' },
  { name: 'saar.freifunk.net', security: null },
  { name: 'Muckelhausen NAT64', security: 'WPA2' },
  { name: 'Muckel.1X-L', security: 'WPA2' },
  { name: 'Muckelhausen', security: 'WPA2' },
  { name: 'Freifunk.Entropolis 5', security: null } ]
```

## License

MIT
