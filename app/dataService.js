angular.module('dataServiceModule', [])
  .factory('Database', function() {
    var login = function() {
      return true
    };

    var logout;

    var getGoingActivities = function(cb) {
      firebase.database().ref('activities').once('value').then(function(snapshot) {
        activities = snapshot.val();
        cb.call(this, activities);
      })
    };

    var getUnseenActivities = function(cb) {
      firebase.database().ref('activities').once('value').then(function(snapshot) {
        activities = snapshot.val();
        cb.call(this, activities);
      })
    };


    var createActivity = function(activity, cb) {
      firebase.database().ref('activities')
        .push(activity)
        .then(function(snapshot) {
          //cb.call(this, snapshot.val());
        });
    };

    var joinActivity = function(cb, currentUser) {
      firebase.database().ref('activities/' + current).once;
    }
    var declineActivity = firebase.database().ref().once;

    return {
      login: login,
      logout: logout,
      getGoingActivities: getGoingActivities,
      getUnseenActivities: getUnseenActivities,
      createActivity: createActivity,
      joinActivity: joinActivity,
      declineActivity: declineActivity
    }

  })
  .factory('Storage', function() {
    var login = function(username) {

    }

  });
