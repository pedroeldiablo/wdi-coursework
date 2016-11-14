angular.module('bakeryApp')
  .controller('BakeriesIndexController', BakeriesIndexController)
  .controller('BakeriesNewController', BakeriesNewController)
  .controller('BakeriesShowController', BakeriesShowController)
  .controller('BakeriesEditController', BakeriesEditController);

BakeriesIndexController.$inject = ['Bakery'];
function BakeriesIndexController(Bakery) {
  const  bakeriesIndex = this;

  bakeriesIndex.all = Bakery.query();
}
BakeriesNewController.$inject = ['Bakery', '$state'];
function BakeriesNewController(Bakery, $state) {
  const bakeriesNew = this;

  bakeriesNew.bakery = {};

  function create() {
    Bakery.save(bakeriesNew.bakery, () => {
      $state.go('bakeriesIndex');
    });
  }
  bakeriesNew.create = create;
}

BakeriesShowController.$inject = ['Bakery', '$state', '$auth'];
function BakeriesShowController(Bakery, $state, $auth) {
  const bakeriesShow = this;

  bakeriesShow.bakery = Bakery.get($state.params);

  function deleteBakery() {
    bakeriesShow.bakery.$remove(() => {
      $state.go('bakeriesIndex');
    });
  }

  bakeriesShow.delete = deleteBakery;
  bakeriesShow.isLoggedIn = $auth.isAuthenicated;
}

BakeriesEditController.$inject = ['Bakery', '$state'];
function BakeriesEditController(Bakery, $state) {
  const bakeriesEdit = this;

  bakeriesEdit.bakery = Bakery.get($state.params);

  function update() {
    bakeriesEdit.bakery.$update(() => {
      $state.go('bakeriesShow', $state.params);
    });
  }

  this.update = update;
}
