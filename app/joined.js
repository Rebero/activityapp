
angular.module('joinedModule', [])
  // create the controller and inject Angular's $scope
  .controller('joinedController', function($scope, Database) {

    $scope.joinedActivities = [];
    $scope.get = Database.getGoingActivities(function(data) {
      var result = [];

      for (var activ in data) {
        result.push(data[activ]);
      }
      $scope.joinedActivities = result;
      $scope.$digest();
    });
  });
