(function() {
    'use strict';

    angular
        .module('app.bikepart')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'bikepart',
                    config: {
                    url: '/bikepart?type',
                    templateUrl: 'app/bikepart/bikepart.html',
                    controller: 'BikePartController',
                    controllerAs: 'vm',
                    title: 'Bikepart'
                }
            }
        ];
  }
})();
