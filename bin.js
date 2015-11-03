#!/usr/bin/env node
var wifi = require('./')

wifi(function (err, list) {
  if (err) throw err
  console.log(list)
})
