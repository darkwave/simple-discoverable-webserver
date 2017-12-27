var budo = require('budo')

budo('./discovery.js',{
  live: true,             // live reload
  stream: process.stdout, // log to stdout
  port: 3000,             // use this as the base port
  watchGlob: '{public}/**/*.{html,css,js}'

}).on('connect', function(ev) {
  //...
})

var bonjour = require('bonjour')()

// advertise an HTTP server on port 3000
bonjour.publish({ name: 'My Web Server', type: 'http', port: 3000 })
