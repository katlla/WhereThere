var map = L.map('map').setView([-37.8259, 144.9524], 15);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'examples.map-i86knfo3'
}).addTo(map);

L.marker([-37.818123, 144.967201]).addTo(map)
			.bindPopup("<b>To there!</b><br />Destination.").openPopup();

var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("Start my journey at " + e.latlng.toString())
		.openOn(map);
}

map.on('click', onMapClick);
