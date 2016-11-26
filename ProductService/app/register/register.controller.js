    'use strict';
    (function () {

    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);

    /* @ngInject */
    function RegisterController($stateParams, $scope,  $q, logger, CoreService){


        $scope.user = {}

        //TODO validate the entries and then call the adduser function in the CoreService
        $scope.registerFunc = function()
        {
            console.log($scope.user)
            console.log($scope.cardform)
            if($scope.cardform.$invalid)
            {
              CoreService.notification("Please enter a valid card")
              return;
            }
            CoreService.addUser($scope.user)
            CoreService.goToHomePage()
        }
    }
})();
