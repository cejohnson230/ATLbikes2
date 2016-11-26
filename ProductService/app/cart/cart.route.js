(function() {
    'use strict';

    angular
        .module('app.cart')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'cart',
                    config: {
                    url: '/cart',
                    templateUrl: 'app/cart/cart.html',
                    controller: 'CartController',
                    controllerAs: 'vm',
                    title: 'Shopping Cart'
                }
            }
        ];
  }
})();
