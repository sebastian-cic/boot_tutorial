// initiate google maps
function initMap() {
	"use strict";
	var uluru = {lat: 51.017334, lng: -114.0532739999};
	var map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 14,
		    center: uluru
	    });
	var marker = new google.maps.Marker({
			position: uluru,
			map: map
	    });
}