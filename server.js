var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
var mount = require('st')({
  path: __dirname,
  index: 'Index.html',
  cache: false
});
var port = process.env.NODE_PORT || process.env.PORT || 3000;

app.get('/bundle.js', function(req, res) {
  require('browserify')(__dirname + '/index.js').bundle().pipe(res);
});

app.get('/*', mount);

server.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('server running at http://localhost:' + port);
});
