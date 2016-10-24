"use strict";

$(function () {
  console.log("JQuery loaded");
});
var googleMap = googleMap || {};

googleMap.loopThroughRestaurants = function (data) {
  $.each(data.restaurant, function (index, restaurant) {
    googleMap.createMarkerForRestaurant(restaurant);
  });
};

googleMap.getRestaurants = function () {
  $.get("http://localhost:3000/api/restaurants").done(this.loopThroughRestaurants);
};

googleMap.addInfoWindowForRestaurant = function (restaurant, marker) {
  var _this = this;

  google.maps.event.addListener(marker, "click", function () {
    if (_this.infowindow) {
      _this.infowindow.close();
    }
    _this.infowindow = new google.maps.InfoWindow({
      content: "\n      <p>" + restaurant.name + "</p>\n      <p>" + restaurant.location + "</p>"
    });
    _this.infowindow.open(_this.map, marker);
  });
};

googleMap.mapSetup = function () {
  var canvas = document.getElementById("map-canvas");

  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(51.5, -0.08),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);
  this.getRestaurants();
};

googleMap.createMarkerForRestaurant = function (restaurant) {
  var latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  var marker = new google.maps.Marker({
    position: latLng,
    map: googleMap.map
  });
  // googleMap.addInfoWindowForCamera(camera, marker);
};

$(googleMap.mapSetup.bind(googleMap));