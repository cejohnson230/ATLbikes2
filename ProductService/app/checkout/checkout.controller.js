
'use strict';
    (function () {

    angular
        .module('app.checkout')
        .controller('CheckoutController', CheckoutController);

    /* @ngInject */
    function CheckoutController($stateParams, $scope,  $q, logger, CoreService, $mdDialog, $mdToast){

        $scope.checkIfBike = function(cartItem)
        {
            if('frameColor' in cartItem.item)
            {
                return true
            }
            else {
                return false
            }
        }

        $scope.cart = CoreService.getCart()
        console.log($scope.cart)

        if(CoreService.isAuthenticated() == true)
        {
            $scope.user = CoreService.getCurrentUser()
            console.log($scope.user)
            $scope.mail_address = $scope.user.address
            $scope.billing_address = $scope.user.address
            $scope.card = $scope.user.card
        }
        else {
            $scope.user = {}
            $scope.mail_address = {}
            $scope.billing_address = {}
            $scope.card = {}
        }
        console.log($scope.user)
        console.log(CoreService.getCurrentUser())

$scope.placeOrderFunc = function ()
{
  console.log($scope.cart);
  console.log($scope.card);
  
  if($scope.cardform.$invalid)
  {
    CoreService.notification("Please enter a valid card")
    return;
  }
  if($scope.cart.length == 0)
  {
    CoreService.notification("Your cart cannot be empty")
  }
  var username = "default"
  var order = {
      first_name: $scope.user.first_name, last_name: $scope.user.last_name, email: $scope.user.email, billing_address: $scope.billing_address,
      mail_address: $scope.mail_address, card: $scope.card, cart: $scope.cart
  }
  if(CoreService.isAuthenticated() == true)
  {
      username = CoreService.getCurrentUser().username
  }
  CoreService.placeOrder(username, order).success(function (response) {

      console.log(response)
      CoreService.notification('successful order')
  }).error(function (data, status, headers, config) {
      CoreService.notification('unsuccessfucl order');
  });
}

$scope.checkIfBike = function(cartItem)
{
  if('frameColor' in cartItem.item)
  {
    return true
  }
  else {
    return false
  }
}

$scope.cancelFunc = function ()
{
  console.log('canceled order')
}
    }
})();
