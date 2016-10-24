$(() => {

  var googleMap = googleMap || {};

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

  navigator.geolocation.getCurrentPosition((position) => {
    let latLng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    googleMap.map.panTo(latLng);
    googleMap.map.setZoom(16);

    let marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      draggable: true,
      map: googleMap.map
    });
  });

  $(googleMap.mapSetup.bind(googleMap));

  googleMap.loopThroughRestaurants = (data) => {
    $.each(data.restaurants, (index, restaurant) => {
      console.log(restaurant);
      googleMap.createMarkerForRestaurant(restaurant);
    });
  };

  googleMap.getRestaurants = function (){
    $.get("http://localhost:3000/api/restaurants").done(this.loopThroughRestaurants);
  };

  googleMap.addInfoWindowForRestaurant = function (restaurant, marker){
    google.maps.event.addListener(marker, "click", () => {
      if (this.infowindow){
        this.infowindow.close();
      }
      this.infowindow = new google.maps.InfoWindow({
        content: `<div class="scrollFix"><img src="${restaurant.image}"><p>${restaurant.name}</p>
        <p>${restaurant.description}</p></div>`
      });
      this.infowindow.open(this.map, marker);
    });
  };

  //
  //
  googleMap.createMarkerForRestaurant = (restaurant) => {
    let latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    let marker = new google.maps.Marker({
      position: latLng,
      map: googleMap.map,
      // icon
    });
    googleMap.addInfoWindowForRestaurant(restaurant, marker);
  };


  $(googleMap.mapSetup.bind(googleMap));

  let $restaurantList = $('#-list');
  let $newForm =$('form.new');
  let $updateForm =$('form.update');

  function appendRestaurant(restaurant) {
    $restaurantList.append(`<li>
      <h2>${restaurant.name}</h2>
      <h4>${restaurant.description}</h4>
      <button class="delete" data-id='${restaurant._id}'>Delete</button>
      <button class="update" data-id='${restaurant._id}'>Update</button>
      </li>`);
  }

// Does the same as INDEX below
//   $.get('http://localhost:8000/beers')
//   .done((res) => {
//     console.log(res);
//   });
// });
  // INDEX
  function createList (){
    $.ajax({
      url: '/api/restaurants',
      method: "GET"
    }).done((res)=> {
      res.forEach((restaurant) => {
        appendRestaurant(restaurant);
      });
    });
  }

  createList();

  // CREATE
  $newForm.on('submit', (e) => {
    e.preventDefault();
    let data =$newForm.serialize();
    $.ajax({
      url: "/api/restaurants",
      method: "POST",
      data
    }).done((restaurant) => {
      appendRestaurant(restaurant);
    });
  });

  // DELETE Requires event deligation as buttons don't exist when page loads. Target list.
  $restaurantList.on('click', 'button.delete', (e) => {
    // console.log($(e.target).attr('data-id'));
    let $button = $(e.target);
    let id = $button.data('id');
    let $li = $button.parent();
    $.ajax ({
      url:`/api/restaurant/${id}`,
      method: "DELETE"
    }).done((res) => {
      $li.remove();
    });
  });

  $restaurantList.on('click', 'button.update', (e) => {
    let $button = $(e.target);
    let id = $button.data('id');
    // let $li = $button.parent();
    $.ajax ({
      url:`/api/restaurants/${id}`,
      method: "GET"
    }).done((restaurant) => {
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

  $updateForm.on('submit', (e) => {
    e.preventDefault();
    let data = $updateForm.serialize();
    let id = $updateForm.find('input[name=id]').val();

    $.ajax({
      url:`/api/restaurants/${id}`,
      method: "PUT",
      data
    }).done((restaurant) => {
      $restaurantList.empty();
      createList();
      $updateForm[0].reset();
    });
  });






});
