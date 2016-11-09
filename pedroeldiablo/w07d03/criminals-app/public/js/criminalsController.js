angular.module('criminalsApp')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject =['$http'];

function CriminalsController($http) {
  const criminals = this;
  criminals.all = [];
  criminals.addCriminal = addCriminal;
  criminals.removeCriminal = removeCriminal;
  criminals.editCriminal = editCriminal;
  criminals.newCriminal = {};

  function addCriminal() {
    $http.post('/criminals', criminals.newCriminal)
    .then((res) => {
      criminals.all.push(res.data);
      criminals.newCriminal = {};
      // getCriminals(); does the same as above but by making a second request to the server
      criminals.form.$setPristine();
      criminals.form.$setUntouched();
    })
    .catch(() => {
      console.log('Something went wrong!');
    });

  }

  function getCriminals(){
    $http.get('/criminals')
      .then((res) => {
        criminals.all = res.data;
      });
  }

  function removeCriminal(id){
    // console.log('Impeach', id);
    $http.delete(`/criminals/${id}`)
      .then(() => {
        // criminals.all.splice($index,1); or
        criminals.all = criminals.all.filter((res) => {
          return res._id !== id;
        });
      });
  }

  function editCriminal(id){
    // console.log('Impeach', id);
    $http.put(`/criminals/${id}`)
      .then(() => {
        // criminals.all.splice($index,1); or
        criminals.all = criminals.all.filter((res) => {
          return res._id !== id;
        });
      });
  }
  getCriminals();
}
