var latTd = document.getElementById("lat");
var lonTd = document.getElementById("lon");

function getGeoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        latTd.innerHTML = "No location";
        lonTd.innerHTML = "No location";
    }
}

function getWeatherData(position)

function showPosition(position) {
    latTd.innerHTML = position.coords.latitude;
    lonTd.innerHTML = position.coords.longitude;
}

window.onload = function () {
    getGeoLocation();    
}