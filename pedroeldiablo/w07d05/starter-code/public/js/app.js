angular
  .module('bakeryApp', ['ngResource', 'ui.router', 'satellizer'])
  .config(Router)
  .config(Auth);

Router.$inject =['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('bakeriesIndex', {
      url: '/bakeries',
      templateUrl: '/templates/bakeriesIndex.html',
      controller: 'BakeriesIndexController as bakeriesIndex'
    })
    .state('bakeriesNew', {
      url: '/bakeries/new',
      templateUrl: '/templates/bakeriesNew.html',
      controller: 'BakeriesNewController as bakeriesNew'
    })
    .state('bakeriesShow', {
      url: '/bakeries/:id',
      templateUrl: '/templates/bakeriesShow.html',
      controller: 'BakeriesShowController as bakeriesShow'
    })
    .state('bakeriesEdit', {
      url: '/bakeries/:id/edit',
      templateUrl: '/templates/bakeriesEdit.html',
      controller: 'BakeriesEditController as bakeriesEdit'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/templates/usersIndex.html',
      controller: 'UsersIndexController as usersIndex'
    })
    .state('usersNew', {
      url: '/users/new',
      templateUrl: '/templates/usersNew.html',
      controller: 'UsersNewController as usersNew'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/templates/usersShow.html',
      controller: 'UsersShowController as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/templates/usersEdit.html',
      controller: 'UsersEditController as usersEdit'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as registerController'
    });

  $urlRouterProvider.otherwise('/bakeries');
}

Auth.$inject =['$authProvider'];
function Auth($authProvider){
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';
}
