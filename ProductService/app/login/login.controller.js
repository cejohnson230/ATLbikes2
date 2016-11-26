    'use strict';
    (function () {

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($stateParams, $scope,  $q, logger, CoreService){


        $scope.user = {}

        $scope.loginFunc = function()
        {
            console.log($scope.user)
            CoreService.login($scope.user.username, $scope.user.password).success(function (response) {

                console.log(response)
                CoreService.setCurrentUser(response)
                CoreService.notification('succesful login');
                CoreService.goToHomePage();
            }).error(function (data, status, headers, config) {
                console.log('login failed??')
                CoreService.setCurrentUser(null)
                CoreService.notification('unsuccesful login');
            });
          }
    }
})();
