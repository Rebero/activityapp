// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
angular.module('mainModule', ['ngRoute', 'loginModule', 'pendingModule'])

  // configure our routes
  .config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'app/pages/login.html',
      controller  : 'loginController'
    })

    // route for home page
    .when('/login', {
      templateUrl : 'app/pages/login.html',
      controller  : 'loginController'
    })

    // route for the about page
    .when('/pending', {
      templateUrl : 'app/pages/pending.html',
      controller  : 'pendingController'
    })

    // route for the contact page
    .when('/joined', {
      templateUrl : 'app/pages/joined.html',
      controller  : 'joinedController'
    });
  })

  // create the controller and inject Angular's $scope
  // .controller('loginController', function($scope) {
  //   $scope.message = 'Everyone come and see how good I look!';
  // })

  // .controller('pendingController', function($scope) {
  //   $scope.message = 'Look! I am an about page.';
  // })

  .controller('joinedController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
  });