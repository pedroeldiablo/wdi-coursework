angular.module('filmApp')
  .controller( 'MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
  const main = this;
  main.isLoggedIn = $auth.isAuthenticated;
  main.message = null;

  function logout() {
    $auth.logout()
      .then(() => {
        $state.go('filmsIndex');
      });
  }

  const protectedStates = ['filmsEdit', 'filmsNew'];

  function secureState(e, toState) {
    main.message = null;
    if(!$auth.isAuthenticated() &&  protectedStates.includes(toState.name)) {
      e.preventDefault();
      $state.go('login');
      main.message= 'You must be logged in to go there!';
    }
  }

  $rootScope.$on('$stateChangeStart', secureState);

  main.logout = logout;
}
