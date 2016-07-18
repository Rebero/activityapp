angular.module('createModule', [dataServiceModule])
  // create the controller and inject Angular's $scope
  .controller('createController', function($scope) {

    $scope.onSubmit = function(newActivity) {
      Activities.createActivity(newActivity);
      $scope.user = {};
    };
  });
