var through = require('through2');

module.exports = function(map) {
  return through.obj(function(data, enc, callback) {
    L.marker(data.coords).addTo(map);
    callback();
  });
};
