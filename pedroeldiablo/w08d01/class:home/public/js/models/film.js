angular.module('filmApp')
  .factory('Film', Film);

Film.$inject = ['$resource'];
function Film($resource) {
  return new $resource('/films/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}