angular.module('dataServiceModule', [])
  .factory('Database', function() {
    var login = function() {
      return true
    };

    var logout;

    var getGoingActivities = function(cb) {
      firebase.database().ref('activities').once('value').then(function(snapshot) {
        var activities = snapshot.val();
        cb.call(null ,activities);
      })
    };

    // var getGoingActivities = function(cb) {
    //   firebase.database().ref('activities').once('value').then(function(snapshot) {
    //     cb.call(this, snapshot.val());
    //   }.bind(this));
    // };

    var getUnseenActivities = firebase.database().ref().once;

    var createActivity = function(activity, cb) {
      firebase.database().ref('activities')
        .push(activity)
        .then(function(snapshot) {
          //cb.call(this, snapshot.val());
        });
    };

    var joinActivity = firebase.database().ref().once;

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

  });
