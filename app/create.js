angular.module('createModule', [])
  // create the controller and inject Angular's $scope
  .controller('createController', function($scope) {

    $scope.onSubmit = function(newActivity) {
      console.log(newActivity);
    };

    // this.model = new app.Activity();
    // console.log(this.model);
    // onSubmit: function(newActivity) {
    //   //add functionality to add facebook username as initiator to newAcitity.initiator
    //   console.log(newActivity);
    //   this.model = new app.Activity();
    //   // we want to call the enterNewActivity here
    // }
  });
