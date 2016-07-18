
  angular.module('loginModule', [])
  // create the controller and inject Angular's $scope
  .controller('loginController', function($scope, Storage) {
    $scope.onSubmit = function(username) {
      Storage.login(username);
      console.log(username);
    }
  })
