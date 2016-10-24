$(() =>{
  console.log("JQuery loaded");
});
var googleMap = googleMap || {};

googleMap.loopThroughRestaurants = (data) => {
  $.each(data.restaurant, (index, restaurant) => {
    googleMap.createMarkerForRestaurant(restaurant);
  });
};

googleMap.getRestaurants = function (){
  $.get("http://localhost:3000/api/restaurants")
    .done(this.loopThroughRestaurants);
};

googleMap.addInfoWindowForRestaurant = function (restaurant, marker){
  google.maps.event.addListener(marker, "click", () => {
    if (this.infowindow){
      this.infowindow.close();
    }
    this.infowindow = new google.maps.InfoWindow({
      content: `
      <p>${restaurant.name}</p>
      <p>${restaurant.location}</p>`
    });
    this.infowindow.open(this.map, marker);
  });
};

googleMap.mapSetup = function () {
  let canvas = document.getElementById("map-canvas");

  let mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(51.5, -0.08),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);
  this.getRestaurants();
};

googleMap.createMarkerForRestaurant = (restaurant) => {
  let latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  let marker = new google.maps.Marker({
    position: latLng,
    map: googleMap.map,
    // icon:'images/marker.png'
  });
  // googleMap.addInfoWindowForCamera(camera, marker);
};


$(googleMap.mapSetup.bind(googleMap));
