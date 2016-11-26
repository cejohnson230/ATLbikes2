(function() {
    'use strict';

    angular
        .module('app.custombikepage')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'custombikepage',
                    config: {
                    url: '/custombike',
                    templateUrl: 'app/custombikepage/custombikepage.html',
                    controller: 'CustomBikePageController',
                    controllerAs: 'vm',
                    title: 'Custom Bike'
                }
            }
        ];
  }
})();
