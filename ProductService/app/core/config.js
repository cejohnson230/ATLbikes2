(function () {
    'use strict';

    angular
        .module('app.core')
        .config(toastrConfig)
        .config(configure)

    var config = {
        appErrorPrefix: '[Error] ',
        appTitle: 'Bike Shop'
    };

    angular
        .module('app.core')
        .value('config', config);

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-top-right';
    }

    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }

})();
