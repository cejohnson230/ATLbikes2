(function() {
    'use strict';

    angular
        .module('app.filters')
        .filter('trusted', TrustedFilter);

    /* @ngInject */
    function TrustedFilter($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        }
    }

})();
