    'use strict';
    (function () {

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController($stateParams, $scope,  $q, logger, CoreService){

        $scope.forks = "forks"
        $scope.frames = "frames"
        $scope.seats = "seats"
        $scope.handles = "handles"
        $scope.wheels = "wheels"

        $scope.goToBikePart = CoreService.goToBikePart
        $scope.goToCustomBike = CoreService.goToCustomBike
      }
})();
