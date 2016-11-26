(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    /* @ngInject */
    function ShellController($rootScope, $scope, $timeout, config, logger, USER_ROLES, $modal, CoreService, $state, AnalyticsHelper, $window) {

        var vm = this;

        vm.busyMessage = 'Please wait ...';

        vm.forks = 'forks'
        vm.frames = 'frames'
        vm.seats = 'seats'
        vm.handles = 'handles'
        vm.wheels = 'wheels'

        $scope.goToProfile = CoreService.goToProfile;
        $scope.logout = CoreService.logout;
        $scope.goToHomePage = CoreService.goToHomePage;
        $scope.goToCart = CoreService.goToCart;
        $scope.goToBikePart = CoreService.goToBikePart;
        $scope.goToCustomBike = CoreService.goToCustomBike;
        $scope.goToLogin = CoreService.goToLogin;
        $scope.goToRegister = CoreService.goToRegister;
        $scope.isAuthenticated = CoreService.isAuthenticated;
        $rootScope.showSplash = true;


        vm.navline = {
            title: config.appTitle,
            text: 'Created by Javier Tovar',
            link: ''
        };
    }
})();
