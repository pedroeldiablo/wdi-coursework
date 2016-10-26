$(() =>{

  let $main = $('main');

  $('.register').on('click', showRegisterForm);
  $('.login').on('click', showLoginForm);
  $main.on('submit', 'form', handleForm);
  $main.on('click', 'button.delete', deleteUser);
  $main.on('click', 'button.edit', getUser);
  $('.usersIndex').on('click', getUsers);
  $('.logout').on('click', logout);

  function isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  if(isLoggedIn()) {
    getUsers();
  } else {
    showLoginForm();
  }

  function showRegisterForm() {
    if(event) event.preventDefault();
    $main.html(`
      <h2>Register</h2>
      <form method="post" action="/register">
        <div class="form-group">
          <input class="form-control" name="username" placeholder="Username">
        </div>
        <div class="form-group">
          <input class="form-control" name="email" placeholder="Email">
        </div>
        <div class="form-group">
          <input class="form-control" type="password" name="password" placeholder="Password">
        </div>
        <div class="form-group">
          <input class="form-control" type="password" name="passwordConfirmation" placeholder="Password Confirmation">
        </div>
        <button class="btn btn-primary">Register</button>
      </form>
    `);
  }

  function showLoginForm() {
    if(event) event.preventDefault();
    $main.html(`
      <h2>Login</h2>
      <form method="post" action="/login">
        <div class="form-group">
          <input class="form-control" name="email" placeholder="Email">
        </div>
        <div class="form-group">
          <input class="form-control" type="password" name="password" placeholder="Password">
        </div>
        <button class="btn btn-primary">Login</button>
      </form>
    `);
  }

  function showEditForm(user) {
    if(event) event.preventDefault();
    $main.html(`
      <h2>Edit User</h2>
      <form method="put" action="/users/${user._id}">
        <div class="form-group">
          <input class="form-control" name="username" placeholder="Username" value="${user.username}">
        </div>
        <button class="btn btn-primary">Update</button>
      </form>
    `);
  }

  function handleForm() {
    if(event) event.preventDefault();
    let token = localStorage.getItem('token');
    let $form = $(this);

    let url = $form.attr('action');
    let method = $form.attr('method');
    let data = $form.serialize();

    $.ajax({
      url,
      method,
      data,
      beforeSend: function(jqXHR) {
        if(token) return jqXHR.setRequestHeader('Authorization', `Bearer ${token}`);
      }
    }).done((data) => {
      if(data.token) localStorage.setItem('token', data.token);
      getUsers();
    }).fail(showLoginForm);
  }

  function getUsers() {
    if(event) event.preventDefault();

    let token = localStorage.getItem('token');
    $.ajax({
      url: '/users',
      method: "GET",
      beforeSend: function(jqXHR) {
        if(token) return jqXHR.setRequestHeader('Authorization', `Bearer ${token}`);
      }
    })
    .done(showPubs)
    .fail(showLoginForm);
  }


  function getPubs() {
    if(event) event.preventDefault();

    let token = localStorage.getItem('token');
    $.ajax({
      url: '/pubs',
      method: "GET",
      beforeSend: function(jqXHR) {
        if(token) return jqXHR.setRequestHeader('Authorization', `Bearer ${token}`);
      }
    })
    .done(showPubs)
      // console.log(data);
      // showPubs();
    .fail(showLoginForm);
  }

  // function showUsers(users) {
  //   console.log(users);
  //   let $row = $('<div class="row"></div>');
  //   users.forEach((user) => {
  //     $row.append(`
  //       <div class="col-md-4">
  //         <div class="card">
  //           <img class="card-img-top" src="http://fillmurray.com/300/300" alt="Card image cap">
  //           <div class="card-block">
  //             <h4 class="card-title">${user.name}</h4>
  //           </div>
  //         </div>
  //         <button class="btn btn-danger delete" data-id="${user._id}">Delete</button>
  //         <button class="btn btn-primary edit" data-id="${user._id}">Edit</button>
  //       </div>
  //     `);
  //   });

  function showPubs() {
    console.log(pubs);
    let $row = $('<div class="row"></div>');
    pubs.forEach((pub) => {
      $row.append(`
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="http://fillmurray.com/300/300" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">${pub.name}</h4>
            </div>
          </div>
          <button class="btn btn-danger delete" data-id="${pub._id}">Delete</button>
          <button class="btn btn-primary edit" data-id="${pub._id}">Edit</button>
        </div>
      `);
    });

    $main.html($row);
  }

  function deleteUser() {
    let id = $(this).data('id');
    let token = localStorage.getItem('token');

    $.ajax({
      url: `/users/${id}`,
      method: "DELETE",
      beforeSend: function(jqXHR) {
        if(token) return jqXHR.setRequestHeader('Authorization', `Bearer ${token}`);
      }
    })
    .done(getUsers)
    .fail(showLoginForm);
  }

  function getUser() {
    let id = $(this).data('id');
    let token = localStorage.getItem('token');

    $.ajax({
      url: `/users/${id}`,
      method: "GET",
      beforeSend: function(jqXHR) {
        if(token) return jqXHR.setRequestHeader('Authorization', `Bearer ${token}`);
      }
    })
    .done(showEditForm)
    .fail(showLoginForm);
  }

  function logout() {
    if(event) event.preventDefault();
    localStorage.removeItem('token');
    showLoginForm();
  }
});















// $(() =>{
// //   console.log("JQuery loaded");
// //
// //   let $beerList = $('#beer-list');
// //   let $newForm =$('form.new');
// //   let $updateForm =$('form.update');
// //
// //   function appendBeer(beer) {
// //     $beerList.append(`<li>
// //       <h2>${beer.name}</h2>
// //       <h4>${beer.brewery}</h4>
// //       <small>${beer.abv}%</small>
// //       <button class="delete" data-id='${beer._id}'>Delete</button>
// //       <button class="update" data-id='${beer._id}'>Update</button>
// //       </li>`);
// //   }
// //
// // // Does the same as INDEX below
// // //   $.get('http://localhost:8000/beers')
// // //   .done((res) => {
// // //     console.log(res);
// // //   });
// // // });
// //   // INDEX
// //   function createList (){
// //     $.ajax({
// //       url: '/beers',
// //       method: "GET"
// //     }).done((res)=> {
// //       res.forEach((beer) => {
// //         appendBeer(beer);
// //       });
// //     });
// //   }
// //
// //   createList();
// //
// //   // CREATE
// //   $newForm.on('submit', (e) => {
// //     e.preventDefault();
// //     let data =$newForm.serialize();
// //     $.ajax({
// //       url: "/beers",
// //       method: "POST",
// //       data
// //     }).done((beer) => {
// //       appendBeer(beer);
// //     });
// //   });
// //
// //   // DELETE Requires event deligation as buttons don't exist when page loads. Target list.
// //   $beerList.on('click', 'button.delete', (e) => {
// //     // console.log($(e.target).attr('data-id'));
// //     let $button = $(e.target);
// //     let id = $button.data('id');
// //     let $li = $button.parent();
// //     $.ajax ({
// //       url:`/beers/${id}`,
// //       method: "DELETE"
// //     }).done((res) => {
// //       $li.remove();
// //     });
// //   });
// //
// //   $beerList.on('click', 'button.update', (e) => {
// //     let $button = $(e.target);
// //     let id = $button.data('id');
// //     // let $li = $button.parent();
// //     $.ajax ({
// //       url:`/beers/${id}`,
// //       method: "GET"
// //     }).done((beer) => {
// //       $updateForm.find('input[name=id]').val(beer._id);
// //       $updateForm.find('input[name=name]').val(beer.name);
// //       $updateForm.find('input[name=brewery]').val(beer.brewery);
// //       $updateForm.find('input[name=abv]').val(beer.abv);
// //       // console.log(beer);
// //       // $li.remove();
// //     });
// //   });
// //
// //   $updateForm.on('submit', (e) => {
// //     e.preventDefault();
// //     let data = $updateForm.serialize();
// //     let id = $updateForm.find('input[name=id]').val();
// //
// //     $.ajax({
// //       url:`/beers/${id}`,
// //       method: "PUT",
// //       data
// //     }).done((beer) => {
// //       $beerList.empty();
// //       createList();
// //       $updateForm[0].reset();
// //     });
// //   });
// //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//     console.log("JQuery loaded");
//
//     let $pubList = $('#pub-list');
//     let $newPubForm =$('form.newpub');
//     let $updatePubForm =$('form.updatepub');
//
//     function appendPub(pub) {
//       $pubList.append(`<li>
//         <h2>${pub.name}</h2>
//         <h4>${pub.address}</h4>
//         <small>${pub.rating}%</small>
//         <button class="delete" data-id='${pub._id}'>Delete</button>
//         <button class="update" data-id='${pub._id}'>Update</button>
//         </li>`);
//     }
//
//   // Does the same as INDEX below
//   //   $.get('http://localhost:8000/beers')
//   //   .done((res) => {
//   //     console.log(res);
//   //   });
//   // });
//     // INDEX
//     function createPubList (){
//       $.ajax({
//         url: '/pubs',
//         method: "GET"
//       }).done((res)=> {
//         res.forEach((pub) => {
//           appendPub(pub);
//         });
//       });
//     }
//
//     createPubList();
//
//     // CREATE
//     $newPubForm.on('submit', (e) => {
//       e.preventDefault();
//       let data =$newPubForm.serialize();
//       $.ajax({
//         url: "/pubs",
//         method: "POST",
//         data
//       }).done((pub) => {
//         appendPub(pub);
//       });
//     });
//
//     // DELETE Requires event deligation as buttons don't exist when page loads. Target list.
//     $pubList.on('click', 'button.delete', (e) => {
//       // console.log($(e.target).attr('data-id'));
//       let $button = $(e.target);
//       let id = $button.data('id');
//       let $li = $button.parent();
//       $.ajax ({
//         url:`/pubs/${id}`,
//         method: "DELETE"
//       }).done((res) => {
//         $li.remove();
//       });
//     });
//
//     $pubList.on('click', 'button.update', (e) => {
//       let $button = $(e.target);
//       let id = $button.data('id');
//       // let $li = $button.parent();
//       $.ajax ({
//         url:`/pubs/${id}`,
//         method: "GET"
//       }).done((pub) => {
//         $updatePubForm.find('input[name=id]').val(pub._id);
//         $updatePubForm.find('input[name=name]').val(pub.name);
//         $updatePubForm.find('input[name=address]').val(pub.address);
//         $updatePubForm.find('input[name=rating]').val(pub.rating);
//         // console.log(beer);
//         // $li.remove();
//       });
//     });
//
//     $updatePubForm.on('submit', (e) => {
//       e.preventDefault();
//       let data = $updatePubForm.serialize();
//       let id = $updatePubForm.find('input[name=id]').val();
//
//       $.ajax({
//         url:`/pubs/${id}`,
//         method: "PUT",
//         data
//       }).done((pub) => {
//         $pubList.empty();
//         createPubList();
//         $updatePubForm[0].reset();
//       });
//     });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//   });
