var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

var bonjour = require('bonjour')()

// advertise an HTTP server on port 3000
bonjour.publish({ name: 'My Web Server', type: 'http', port: 3000 })
