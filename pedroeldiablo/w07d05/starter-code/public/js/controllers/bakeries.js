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

  function createBakery() {
    Bakery.save(bakeriesNew.bakery, () => {
      $state.go('bakeriesIndex');
    });
  }
  bakeriesNew.create = createBakery;
}

BakeriesShowController.$inject = ['Bakery', '$state'];
function BakeriesShowController(Bakery, $state) {
  const bakeriesShow = this;

  bakeriesShow.bakery = Bakery.get($state.params);

  function deleteBakery() {
    // Bakery.remove({ id: bakeriesShow.bakery._id}, () => {
    //   $state.go('$bakeriesIndex');
    // });

    bakeriesShow.bakery.$remove(() => {
      $state.go('bakeriesIndex');
    });
  }

  bakeriesShow.bakeriesDelete = deleteBakery;
}

BakeriesEditController.$inject = ['Bakery', '$state'];
function BakeriesEditController(Bakery, $state) {
  const bakeriesEdit = this;

  bakeriesEdit.bakery = Bakery.get($state.params);

  function updateBakery() {
    bakeriesEdit.bakery.$update(() => {
      $state.go('bakeriesShow', $state.params);
    });
  }

  // function updateBakery() {
  //   Bakery.update(bakeriesEdit.bakery, () => {
  //     $state.go('bakeriesIndex');
  //   });
  // }
  bakeriesEdit.update =updateBakery;
}
