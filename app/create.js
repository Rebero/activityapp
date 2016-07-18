angular.module('createModule', [])
  // create the controller and inject Angular's $scope
  .controller('createController', function($scope, Activities) {

    $scope.onSubmit = function(newActivity) {
      Activities.createActivity(newActivity);
      $scope.user = {};
    };
  });
