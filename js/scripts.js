var button_search = document.querySelector(".search__btn");
var popup = document.querySelector(".form-search");

button_search.addEventListener("click", function(event) {
	event.preventDefault();
	if (popup.classList.contains("is-visible")) {
		popup.classList.remove("is-visible");
	}
	else {
		popup.classList.add("is-visible");
	}
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode == 27) {
		if (popup.classList.contains("is-visible")) {
			popup.classList.remove("is-visible");
		}
	}
});

function initialize() {
	var mapOptions = {
		zoom: 9,
		center: new google.maps.LatLng(34.867267, -111.760978)
	}
	var map = new google.maps.Map(document.getElementById("map-canvas"),
																mapOptions);
	var myLatLng = new google.maps.LatLng(34.869661, -111.760949);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map
	});
}
google.maps.event.addDomListener(window, "load", initialize);