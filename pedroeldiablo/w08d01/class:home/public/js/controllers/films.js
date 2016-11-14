angular.module('filmApp')
  .controller('FilmsIndexController', FilmsIndexController)
  .controller('FilmsNewController', FilmsNewController)
  .controller('FilmsShowController', FilmsShowController)
  .controller('FilmsEditController', FilmsEditController);

FilmsIndexController.$inject = ['Film'];
function FilmsIndexController(Film) {
  const filmsIndex = this;

  filmsIndex.all = Film.query();
}

FilmsNewController.$inject = ['Film', '$state'];
function FilmsNewController(Film, $state) {
  const filmsNew = this;

  filmsNew.film = {};

  function create() {
    Film.save(filmsNew.film, () => {
      $state.go('filmsIndex');
    });
  }

  filmsNew.create = create;
}

FilmsShowController.$inject = ['Film', '$state', '$auth'];
function FilmsShowController(Film, $state, $auth) {
  const filmsShow = this;

  filmsShow.film = Film.get($state.params);

  function deleteFilm() {
    filmsShow.film.$remove(() => {
      $state.go('filmsIndex');
    });
  }

  filmsShow.delete = deleteFilm;
  filmsShow.isLoggedIn = $auth.isAuthenicated;
}

FilmsEditController.$inject = ['Film', '$state'];
function FilmsEditController(Film, $state) {
  const filmsEdit = this;

  filmsEdit.film = Film.get($state.params);

  function update() {
    filmsEdit.film.$update(() => {
      $state.go('filmsShow', $state.params);
    });
  }

  this.update = update;

}
