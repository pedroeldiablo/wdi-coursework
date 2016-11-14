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
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as registerController'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as loginController'
    });

  $urlRouterProvider.otherwise('/bakeries');
}

Auth.$inject =['$authProvider'];
function Auth($authProvider){
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';

  $authProvider.facebook({
    clientId: '538974662972278'
  });
  $authProvider.github({
    clientId: '99d145a5cc113107ffff'
  });
}
