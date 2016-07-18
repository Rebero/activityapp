angular.module('createModule', [])
  // create the controller and inject Angular's $scope
  .controller('createController', function($scope) {

    $scope.onSubmit = function(newActivity) {
      console.log(newActivity);
      $scope.user = {};
    };
  });
