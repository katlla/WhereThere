var center = require('turf-center');
var point = require('turf-point');
var linestring = require('turf-linestring');

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

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //map markers
    var marker = L.marker([lat,lon]).addTo(map)
        .bindPopup("<b>Start here!</b><br />").openPopup();

    function onMapClick(e) {
        L.popup()
            .setLatLng(e.latlng)
            .setContent("Finish here.")
            .openOn(map);
    }

    map.on('click', onMapClick);
}

getLocation();
