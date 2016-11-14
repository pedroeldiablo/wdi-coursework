angular.module('bakeryApp')
  .factory('Bakery', Bakery);

Bakery.$inject = ['$resource'];
function Bakery($resource) {
  return new $resource('/bakeries/:id', { id: '@_id'}, {
    update: { method: 'PUT'}
  });
}
