var through = require('through2');
var icons = {
  tram: L.icon({
      iconUrl: 'img/icon_12596.svg',
      iconRetinaUrl: 'img/icon_12596.svg',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
  })
};


module.exports = function(map, opts) {
  var icon = icons[(opts || {}).icon || 'tram'];

  return through.obj(function(data, enc, callback) {
    L.marker(data.coords, { icon: icon }).addTo(map);
    this.push(data);
    callback();
  });
};
