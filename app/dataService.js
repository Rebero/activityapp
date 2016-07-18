angular.module('dataServiceModule', [])
.factory('Activities', function() {
  var login = function(){
    return true
  };

  var logout;

  var getGoingActivities = function(cb, activities) {
    firebase.database().ref('activities').once('value').then(function(snapshot) {
      activities = snapshot.val();
      cb.call(this, activities);
    })
  };

  var getUnseenActivities = firebase.database().ref().once;

  var createActivity = function(cb) {
    firebase.database().ref('activities')
    .push(activity)
    .then(function(snapshot) {
          return snapshot.val();
    });
  };

  
  var joinActivity = firebase.database().ref().once;

  var declineActivity = firebase.database().ref().once;











  return {
    login : login,
    logout : logout,
    getGoingActivities : getGoingActivities,
    getUnseenActivities : getUnseenActivities,
    createActivity : createActivity,
    joinActivity : joinActivity,
    declineActivity : declineActivity
  }

});