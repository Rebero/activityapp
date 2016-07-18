
angular.module('joinedModule', [])
  // create the controller and inject Angular's $scope
  .controller('joinedController', function($scope) {
    $scope.joinedActivities = [ {name: 'Hiking', date: '07/18/2015', time: '9:00 am', going: 'Ben, Rene',creator: 'Nick', comments: "Let's climb!", imageLink: 'https://pixabay.com/static/uploads/photo/2014/07/28/06/23/rock-climbing-403487_960_720.jpg',},
                                {name: 'Baseball Game', imageLink: '', date: '07/20/2015', time: '10:00 am', going: 'Nick, Oliver',creator: 'Josh', comments: "Play Ball!", imageLink: 'https://pixabay.com/static/uploads/photo/2014/06/20/10/44/softball-372979_960_720.jpg'}
                              ];
  })
