angular.module('bakeryApp')
  .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$auth', '$state'];
function RegisterController($auth, $state) {
  const register =this;

  register.user = {};

  function submit() {
    $auth.signup(register.user)
      .then(() => {
        $state.go('bakeriesIndex');
      });
  }
  register.submit = submit;
}
