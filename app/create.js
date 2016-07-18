angular.module('createModule', [])
  // create the controller and inject Angular's $scope
  .controller('createController', function($scope, Database) {

    $scope.onSubmit = function(newActivity) {
      Database.createActivity(newActivity);
      $scope.user = {};
    };
  });
