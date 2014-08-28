var center = require('turf-center');
var point = require('turf-point');
var linestring = require('turf-linestring');

var tonerUrl = "http://{S}tile.stamen.com/toner/{Z}/{X}/{Y}.png";
var url = tonerUrl.replace(/({[A-Z]})/g, function(s) {
    return s.toLowerCase();
});

//auto detect location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Your browser doesn't support your location")
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var markerlat = -37.8333;
    var markerlon = 145.0000;

    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map').setView([lat,lon], 13);

    //map markers
    var marker = L.marker([lat,lon]).addTo(map)
        .bindPopup("<b>Start here!</b><br />").openPopup();

    function onMapClick(e) {
        L.popup()
            .setLatLng(e.latlng)
            .setContent("Finish here.")
            .openOn(map);
    }

    L.tileLayer(url, {
        subdomains: ['','a.','b.','c.','d.'],
        minZoom: 0,
        maxZoom: 20,
        type: 'png',
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
    }).addTo(map);

    map.on('click', onMapClick);
}

switch (location.pathname) {
  case '/map.html': {
    getLocation();
    break;
  }

  default: {
  }
}
