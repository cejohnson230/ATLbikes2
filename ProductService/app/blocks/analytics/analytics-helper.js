(function() {
  'use strict';
  var analyticsHelper = angular.module('blocks.analytics')
    .service('AnalyticsHelper', AnalyticsHelper)


  function AnalyticsHelper($rootScope) {
    //TODO Analytics specific stuff here
    var service = {};
    service.sendEvent = function(catagory, action, label, value) {
      ga('send', 'event', catagory, action, label, value);
    }

    return service;
  };

  analyticsHelper.run(function($rootScope) {
    $rootScope.$on('$locationChangeSuccess', onLocationStateChange);
  });

  function onLocationStateChange(event, to, from) {
    var path = to.substring(to.lastIndexOf('/'));
    // ga('send', 'pageview', path);
  };

})();
