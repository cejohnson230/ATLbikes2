(function() {
    'use strict';

    angular
        .module('app.checkout')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'checkout',
                    config: {
                    url: '/checkout',
                    templateUrl: 'app/checkout/checkout.html',
                    controller: 'CheckoutController',
                    controllerAs: 'vm',
                    title: 'Checkout'
                }
            }
        ];
  }
})();
