angular.module('dataServiceModule', [])
.factory('Activities', function() {
  var login = return true;
  var logout;
  var getGoingActivities = firebase.database().ref('activities').once.('value')then(function(snapshot) {

  });
  var getUnseenActivities = firebase.database().ref().once;
  var createActivity = firebase.database().ref('activities')
    .push(activity)
    .then(function(snapshot) { // commented out so we dont actually always create new activity
          console.log('inside creation');
          console.log(activity, snapshot);
    });
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