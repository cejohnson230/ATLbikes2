    'use strict';
    (function () {

    angular
        .module('app.custombikepage')
        .controller('CustomBikePageController', CustomBikePageController);

    /* @ngInject */
	function CustomBikePageController($stateParams, $scope,  $q, logger, CoreService,  $mdDialog, $mdToast)
	{
        $scope.index = 1
        $scope.forkColor = "black";
        $scope.frameColor = 'white';
        $scope.seatColor = 'white';
        $scope.handleColor = 'white';
        $scope.frameDecalColor = 'white';
        $scope.click = function()
        {
            $scope.forkColor = "orange";
        }

        $scope.forkColor = "black";
        $scope.frameColor = 'black';
        $scope.seatColor = 'black';
        $scope.handleColor = 'black';
        $scope.frameDecalColor = 'black';

        $scope.genPrice = function()
        {
          var cost = 200
          if($scope.forkColor != 'black')
          {
            cost = cost + 30
          }
          if($scope.frameColor != 'black')
          {
            cost = cost + 50
          }

          if($scope.seatColor != 'black')
          {
            cost = cost + 5
          }
          if($scope.handleColor != 'black')
          {
            cost = cost + 10
          }
          if($scope.frameDecalColor != 'black')
          {
            cost = cost + 4
          }
          return cost
        }

        $scope.addToCart = function(ev)
        {
          var confirm = $mdDialog.confirm()
                .title('Add Bike To Cart')
                .textContent('Would you like to add this custom bike to your cart? Its price is ' + $scope.genPrice())
                .targetEvent(ev)
                .ok('Add To Cart')
                .cancel('No');

      		$mdDialog.show(confirm).then(function() {
              var item = {
                forkColor : $scope.forkColor,
                frameColor : $scope.frameColor,
                seatColor : $scope.seatColor,
                handleColor: $scope.handleColor,
                frameDecalColor: $scope.frameDecalColor,
                price: $scope.genPrice(),
                  name: "Custom bike"
              }
              CoreService.addToCart({"item": item, "quantity": 1})
      		    $mdToast.show(
      			$mdToast.simple()
      			    .textContent("Bike was added to cart")
      		    );
      		}, function() {
      		$mdToast.show(
      			$mdToast.simple()
      			    .textContent("Bike was not added to cart")
              );
        });
      }

    }
})();
