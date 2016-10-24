"use strict";

$(function () {

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

  navigator.geolocation.getCurrentPosition(function (position) {
    var latLng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    googleMap.map.panTo(latLng);
    googleMap.map.setZoom(16);

    var marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      draggable: true,
      map: googleMap.map
    });
  });

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
        content: "<div class=\"scrollFix\"><img src=\"" + restaurant.image + "\"><p>" + restaurant.name + "</p>\n        <p>" + restaurant.description + "</p></div>"
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

  var $restaurantList = $('#-list');
  var $newForm = $('form.new');
  var $updateForm = $('form.update');

  function appendRestaurant(restaurant) {
    $restaurantList.append("<li>\n      <h2>" + restaurant.name + "</h2>\n      <h4>" + restaurant.description + "</h4>\n      <button class=\"delete\" data-id='" + restaurant._id + "'>Delete</button>\n      <button class=\"update\" data-id='" + restaurant._id + "'>Update</button>\n      </li>");
  }

  // Does the same as INDEX below
  //   $.get('http://localhost:8000/beers')
  //   .done((res) => {
  //     console.log(res);
  //   });
  // });
  // INDEX
  function createList() {
    $.ajax({
      url: '/api/restaurants',
      method: "GET"
    }).done(function (res) {
      res.forEach(function (restaurant) {
        appendRestaurant(restaurant);
      });
    });
  }

  createList();

  // CREATE
  $newForm.on('submit', function (e) {
    e.preventDefault();
    var data = $newForm.serialize();
    $.ajax({
      url: "/api/restaurants",
      method: "POST",
      data: data
    }).done(function (restaurant) {
      appendRestaurant(restaurant);
    });
  });

  // DELETE Requires event deligation as buttons don't exist when page loads. Target list.
  $restaurantList.on('click', 'button.delete', function (e) {
    // console.log($(e.target).attr('data-id'));
    var $button = $(e.target);
    var id = $button.data('id');
    var $li = $button.parent();
    $.ajax({
      url: "/api/restaurant/" + id,
      method: "DELETE"
    }).done(function (res) {
      $li.remove();
    });
  });

  $restaurantList.on('click', 'button.update', function (e) {
    var $button = $(e.target);
    var id = $button.data('id');
    // let $li = $button.parent();
    $.ajax({
      url: "/api/restaurants/" + id,
      method: "GET"
    }).done(function (restaurant) {
      $updateForm.find('input[name=id]').val(restaurant._id);
      $updateForm.find('input[name=name]').val(restaurant.name);
      $updateForm.find('input[name=image]').val(restaurant.image);
      $updateForm.find('input[name=description]').val(restaurant.description);
      $updateForm.find('input[name=lat]').val(restaurant.lat);
      $updateForm.find('input[name=lng]').val(restaurant.lng);
      // console.log(beer);
      // $li.remove();
    });
  });

  $updateForm.on('submit', function (e) {
    e.preventDefault();
    var data = $updateForm.serialize();
    var id = $updateForm.find('input[name=id]').val();

    $.ajax({
      url: "/api/restaurants/" + id,
      method: "PUT",
      data: data
    }).done(function (restaurant) {
      $restaurantList.empty();
      createList();
      $updateForm[0].reset();
    });
  });
});