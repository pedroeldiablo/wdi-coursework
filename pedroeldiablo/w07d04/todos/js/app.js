angular
	.module('todoApp', ['ui.router'])
  .config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('archive', {
      url: '/archive',
      templateUrl: 'archive.html'
    })
    .state('edit', {
      url: '/edit',
      templateUrl: 'edit.html'
    });

  $urlRouterProvider.otherwise('/');
    // ROUTE
}
