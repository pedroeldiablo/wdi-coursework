"use strict";

var googleMap = googleMap || {};

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

$(googleMap.mapSetup.bind(googleMap));

googleMap.loopThroughRestaurants = function (data) {
  $.each(data.restaurants, function (index, restaurant) {
    console.log(restaurant);
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
      content: "\n      <p>" + restaurant.name + "</p>\n      <img src =" + restaurant.image + ">"
    });
    _this.infowindow.open(_this.map, marker);
  });
};

//
//
googleMap.createMarkerForRestaurant = function (restaurant) {
  var latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  var marker = new google.maps.Marker({
    position: latLng,
    map: googleMap.map
  });
  googleMap.addInfoWindowForRestaurant(restaurant, marker);
};

$(googleMap.mapSetup.bind(googleMap));