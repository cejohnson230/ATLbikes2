    'use strict';
    (function () {

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController($stateParams, $scope,  $q, logger, CoreService){

        var that = this
        $scope.orders = []
        $scope.user = CoreService.getCurrentUser()

        CoreService.getPastOrders($scope.user.username).success(function (response) {

            console.log(response)
            CoreService.orders = response
            that.orders = response
        }).error(function (data, status, headers, config) {
            console.log('login failed??')
            CoreService.orders = []
        }).then($scope.orders = CoreService.orders);
        //TODO validate the entries and then call the adduser function in the CoreService
        $scope.updateFunc = function()
        {
          if($scope.cardform.$invalid)
          {
            CoreService.notification("Please enter a valid card")
            return;
          }
          console.log($scope.user)
 

            CoreService.updateUser($scope.user.username, $scope.user).success(function (response) {
            }).error(function (data, status, headers, config) {
                CoreService.setCurrentUser(null);
            });

            if (CoreService.getCurrentUser() == null) {
                CoreService.notification("unsuccesful user edit")
            }
            else {
                CoreService.notification('successful user edit')
                CoreService.goToHomePage()
            }
        }
        $scope.cancelFunc = function()
        {
            console.log(that.orders)
            console.log(CoreService.orders)
            console.log($scope.orders)
        }

        $scope.getOrders = function()
        {
            $scope.orders = that.orders;
        }
    }
})();
