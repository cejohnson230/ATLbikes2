
'use strict';
    (function () {

    angular
        .module('app.cart')
        .controller('CartController', CartController);

    /* @ngInject */
	function CartController($stateParams, $scope,  $q, logger, CoreService, $mdDialog, $mdToast){
            var imagePath = 'assets/images/angular.png';



	    $scope.removeFromCart = function(ev, index)
	    {
		var confirm = $mdDialog.confirm()
          .title('Remove Item')
          .textContent('Would you like to remove item from cart?')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('No');

		$mdDialog.show(confirm).then(function() {
      $scope.cart.splice(index, 1)
      CoreService.updateCart($scope.cart)
      $scope.calculateTotal()
		    $mdToast.show(
			$mdToast.simple()
			    .textContent("Item was removed from cart")
		    );
		}, function() {
		$mdToast.show(
			$mdToast.simple()
			    .textContent("Item was not removed from cart")
		);
		});
	    }

	    $scope.changeQuantity = function(ev, item, cart, index) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'assets/templates/changeItemQuantity.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
	fullscreen: false, // Only for -xs, -sm breakpoints.
	locals: {
	    item : item,
      cart: cart,
      index: index

	}
    })
    .then(function() {
      $scope.cart = CoreService.getCart()
      $scope.calculateTotal()
      $mdToast.show(
		    $mdToast.simple()
			.textContent("Item quantity changed")
			.hideDelay(3000)
			)
    }, function() {
      $mdToast.show(
		    $mdToast.simple()
			.textContent("Item quantity not changed")
			.hideDelay(3000)
			)
    });
  };

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
$scope.total = 0

	    function DialogController($scope, $mdDialog, $mdToast, item, cart, index) {
		$scope.myForm = {}
		$scope.quantity = 1
		$scope.item = item
    console.log(index)
		$scope.validate = function()
		{
      cart[index].quantity = $scope.quantity
      CoreService.updateCart(cart)
		    $mdDialog.hide()
		}


    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
    $scope.calculateTotal = function()
    {
      $scope.total = 0;
      for(var i = 0; i < $scope.cart.length; i++)
      {
        $scope.total = $scope.total + $scope.cart[i].quantity*$scope.cart[i].item.price
      }
      $scope.total = $scope.total.toFixed(2)
    }
    $scope.calculateTotal()

    $scope.isCartEmpty = function()
    {
      if($scope.cart.length > 0)
      {
        return false;
      }
      else {
        return true;
      }
    }

    $scope.goToCheckout = CoreService.goToCheckout
    }

})();
