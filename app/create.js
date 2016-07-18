angular.module('createModule', [])
  // create the controller and inject Angular's $scope
  .controller('createController', function($scope) {

    $scope.onSubmit = function(newActivity) {
      $scope.user = {};
    };
  });
