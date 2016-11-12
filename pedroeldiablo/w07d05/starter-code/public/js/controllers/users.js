angular.module('bakeryApp')
  .controller('UsersIndexController', UsersIndexController)
  .controller('UsersNewController', UsersNewController)
  .controller('UsersShowController', UsersShowController)
  .controller('UsersEditController', UsersEditController);

UsersIndexController.$inject = ['User'];
function UsersIndexController(User) {
  const  usersIndex = this;

  usersIndex.all = User.query();
}
UsersNewController.$inject = ['User', '$state'];
function UsersNewController(User, $state) {
  const usersNew = this;

  usersNew.user = {};

  function createUser() {
    User.save(usersNew.user, () => {
      $state.go('usersIndex');
    });
  }
  usersNew.create = createUser;
}

UsersShowController.$inject = ['User', '$state'];
function UsersShowController(User, $state) {
  const usersShow = this;

  usersShow.user = User.get($state.params);

  function deleteUser() {
    // User.remove({ id: usersShow.user._id}, () => {
    //   $state.go('$usersIndex');
    // });

    usersShow.user.$remove(() => {
      $state.go('usersIndex');
    });
  }

  usersShow.delete = deleteUser;
}

UsersEditController.$inject = ['User', '$state'];
function UsersEditController(User, $state) {
  const usersEdit = this;

  usersEdit.user = User.get($state.params);

  function updateUser() {
    usersEdit.user.$update(() => {
      $state.go('usersIndex', $state.params);
    });
  }

  // function updateUser() {
  //   User.update(usersEdit.user, () => {
  //     $state.go('usersIndex');
  //   });
  // }
  usersEdit.update =updateUser;
}
