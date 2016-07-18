
angular.module('joinedModule', [])
  // create the controller and inject Angular's $scope
  .controller('joinedController', function($scope, Database) {
    //New way ???
    // $scope.joinedActivities = undefined;
    // $scope.get = Database.getGoingActivities(function(data) {
    //   var result = [];

    //   for (var activ in data) {
    //     result.push(activ);
    //   }

    //   $scope.joinedActivities = result;
    // });
    
    // Old way 
    this.joinedActivities = undefined;

    Database.getGoingActivities.call(this, function(data) {
      var result = [];

      for (var activ in data) {
        result.push(activ);
      }
      this.joinedActivities = result;
    });
  });
