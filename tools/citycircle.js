var csv = require('csv-parser');
var fs = require('fs');
var source = fs.createReadStream(__dirname + '/../data/City_Circle_Tram_Stops.csv');
var JSONStream = require('JSONStream');
var es = require('event-stream');

source.pipe(csv())
  .pipe(es.map(function(data, callback) {
    var coords = data['Co-ordinates'].slice(1, -1).split(/\,\s/).map(parseFloat);

    callback(null, {
      name: data.Name,
      stop: data['Stop Number'],
      coords: coords
    });
  }))
  .pipe(JSONStream.stringify())
  .pipe(fs.createWriteStream(__dirname + '/../data/citycircle.json'));
