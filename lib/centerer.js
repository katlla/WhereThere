var through = require('through2');
var center = require('turf-center');
var linestring = require('turf-linestring');

module.exports = function(map, opts) {
  var points = [];

  function centerMap() {
    var line = linestring(points);

    console.log('centering map');

    map.setView(center(line).geometry.coordinates, 14);
  }

  return through.obj(function(data, enc, callback) {
    points.push(data.coords);
    callback();
  }, centerMap);
};
