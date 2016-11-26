
'use strict';
    (function () {

    angular
        .module('app.bikepart')
        .controller('BikePartController', BikePartController);

    /* @ngInject */
	function BikePartController($stateParams, $scope,  $q, logger, CoreService, $mdDialog, $mdToast){

        $scope.quantity = 0

	    $scope.addToCart = function(ev, item) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'assets/templates/addItemToCart.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
	fullscreen: false, // Only for -xs, -sm breakpoints.
	locals: {
	    item : item
	}
    })
    .then(function() {
      $mdToast.show(
		    $mdToast.simple()
			.textContent("Item was added to cart")
			.hideDelay(3000)
			)
    }, function() {
      $mdToast.show(
		    $mdToast.simple()
			.textContent("Item was not added to cart")
			.hideDelay(3000)
			)
    });
  };

$scope.inventory = {products:
  {seats:
    [
        {id : 1,
       name : "OUTERDO Bike Saddle Mountain Bike Seat Professional Road MTB Gel Comfort Bicycle Seat Cycling Seat Cushion Pad 27*15cm",
       price : 13.89,
       photo : "assets/seats/1.jpg"},
        {id : 2,
       name : "Allnice® Uprated Vershion Comfortable Light Weight Mountain Bike Road Bicycle Hollow Out Spider Saddle Seat Cushion Bicycle Accessories-Black Color",
       price : 15.72,
       photo : "assets/seats/2.jpg"},
       {id : 3,
       name : "Etcbuys 3D Silicone Gel Saddle Cushion Outdoor Bicycle Soft Cover/Protector",
       price : 8.99,
       photo : "assets/seats/3.jpg"},
       {id : 4,
       name : "Selle Royal Classic Drifter Gel Relaxed Cruiser Saddle",
       price : 37.27,
       photo : "assets/seats/4.jpg"},
       {id : 5,
       name : "Sunlite Backrest Saddle, 9 x 11\", Black",
       price : 58.97,
       photo : "assets/seats/5.jpg"},
       {id : 6,
       name : "Hobson Easyseat Ergonomical Dual Pad Bicycle Saddle",
       price : 27.99,
       photo : "assets/seats/6.jpg"},
       {id : 7,
       name : "Brooks Saddles B67 Bicycle Saddle (Men's)",
       price : 102.99,
       photo : "assets/seats/7.jpg"},
       {id : 8,
       name : "Brooks England B17 Special Saddle",
       price : 149.47,
       photo : "assets/seats/8.jpg"},
       {id : 9,
       name : "ISM PL 1.1 Saddle",
       price : 139.65,
       photo : "assets/seats/9.jpg"},
       {id : 10,
       name : "Fizik Antares R3 K:ium Rails Road Bicycle Saddle",
       price : 248.75,
       photo : "assets/seats/10.jpg"},
    ],
   frame:
      [
        {id : 1,
       name : "Track Fixie Single Speed Road Bike Frame with Fork Headset Seatpost White",
       price : 99.00,
       photo : "assets/frame/1.jpg"},
       {id : 2,
       name : "Road Tri Bike Frame 52cm Small 700c 6061 1 1/8\" Aluminum Unpainted + Headset NEW",
       price : 79.97,
       photo : "assets/frame/2.jpg"},
       {id : 3,
       name : "Vilano Chromoly Fixed Gear Track Road Bike Frame and Fork Set",
       price : 137.39,
       photo : "assets/frame/3.jpg"},
       {id : 4,
       name : "Aero S7 Alloy Track Frame Matte Black 50cm",
       price : 179.00,
       photo : "assets/frame/4.jpg"},
       {id : 5,
       name : "Pure Fix Keirin Pro Track Triple-Butted 6061 Aluminum Bike Frameset",
       price : 338.66,
       photo : "assets/frame/5.jpg"},
       {id : 6,
       name : "State Bicycle Fixed Gear 6061 Black Label Frame",
       price : 189.00,
       photo : "assets/frame/6.jpg"},
       {id : 7,
       name : "Visp Trx790nl Alloy Fixed Gear Fixie Frame",
       price : 90.88,
       photo : "assets/frame/7.jpg"},
       {id : 8,
       name : "Allen Sports Tension Bar Bicycle Cross-Bar Adaptor",
       price : 16.99,
       photo : "assets/frame/8.jpg"},
       {id : 9,
       name : "Portable Bicycle Frame Pump with Gauge,High Pressure Cycling Pump for Presta & Schrader",
       price : 18.99,
       photo : "assets/frame/9.jpg"},
       {id : 10,
      name : "State Bicycle Co Fixed Gear Fixie Chromoly Frame and Fork Set",
      price : 189.99,
      photo : "assets/frame/10.jpg"},
    ],
   forks:
      [
        {id : 1,
       name : "Hollywood Racks T970 Fork Block 1 Bicycle Fork Mount",
       price : 11.16,
       photo : "assets/forks/1.jpg"},
        {id : 2,
       name : "Sunlite QR Bike Block Fork Mount",
       price : 29.42,
       photo : "assets/forks/2.jpg"},
       {id : 3,
       name : "Delta Cycle Bike Hitch Locking Fork Mount",
       price : 15.75,
       photo : "assets/forks/3.jpg"},
       {id : 4,
       name : "Thule 821 Low Rider Bicycle Fork Mount",
       price : 39.95,
       photo : "assets/forks/4.jpg"},
       {id : 5,
       name : "State Bicycle Carbon Fiber Fork",
       price : 169.99,
       photo : "assets/forks/5.jpg"},
       {id : 6,
       name : "DNM USD-8 Downhill Mountain Bike Air Fork 1-1/8\" 203mm 20mm Axle 26\"",
       price : 399.99,
       photo : "assets/forks/6.jpg"},
       {id : 7,
       name : "Yakima WB 200 Rooftop Fork Bike Mount",
       price : 209.17,
       photo : "assets/forks/7.jpg"},
       {id : 8,
       name : "20\" Bent Cage Square Twisted Spring Fork 1\" Chrome. Bike fork, bicycle fork, lowrider bike fork lowrider bicycle fork",
       price : 99.94,
       photo : "assets/forks/8.jpg"},
       {id : 9,
       name : "RockShox Revelation RCT3 Maxlelite15 Solo Air 130 Suspension Bicycle Fork, 29\"",
       price : 805.00,
       photo : "assets/forks/9.jpg"},
       {id : 10,
       name : "v 26in Chrome Mountain Bike Steel Forks, Threadless",
       price : 50.16,
       photo : "assets/forks/10.jpg"},
    ],
      wheels:
      [
        {id : 1,
       name : "Sta-Tru Silver Alloy ATB Hub Quick Release Front Wheel (26X1.5-Inch)",
       price : 33.99,
       photo : "assets/wheels/1.jpg"},
        {id : 2,
       name : "Wald 10252 Bicycle Training Wheels (16 to 20-Inch Wheels, .75 and 1-Inch Frame Tubes)",
       price : 22.99,
       photo : "assets/wheels/2.jpg"},
       {id : 3,
       name : "Retrospec Bicycles Mantra Fixed-Gear/Single-Speed Wheelset with 700 x 25C Kenda Kwest Tires and Sealed Hubs",
       price : 119.99,
       photo : "assets/wheels/3.jpg"},
       {id : 4,
       name : "Superteam 50mm Clincher Wheelset 700c 23mm Width Cycling Racing Road Carbon Wheel Decal",
       price : 325.00,
       photo : "assets/wheels/4.jpg"},
       {id : 5,
       name : "Sunrise Bike Clincher Wheelset 50mm 700c Carbon Road Bicycle Wheel with 20-24 Holes",
       price : 315.00,
       photo : "assets/wheels/5.jpg"},
       {id : 6,
       name : "VCYCLE 700c 60mm Clincher Carbon Wheels 1520g LightWeight Bicycle Wheelset for Shimano",
       price : 435.00,
       photo : "assets/wheels/6.jpg"},
       {id : 7,
       name : "Queen Bike Carbon Fixed Gear Wheelset 700C 88mm Track Wheel Clincher Matte Finish",
       price : 399.00,
       photo : "assets/wheels/7.jpg"},
       {id : 8,
       name : "Zipp 808 Firecrest Carbon Clincher v3 Road Wheel",
       price : 1277.99,
       photo : "assets/wheels/8.jpg"},
       {id : 9,
       name : "Reynolds 46 Aero Carbon Road Wheelset - Clincher",
       price : 1899.99,
       photo : "assets/wheels/9.jpg"},
       {id : 10,
       name : "Mavic Rim 29er Mountain Bike Wheels with Disc Brake Shimano Hubs PLUS Free Continental 29x2.2\" Race King Tires and Tubes!",
       price : "159.95",
       photo : "assets/wheels/10.jpg"},
      ],
     
      handles: [{
          id: 1,
          name: "MEXUD-Stitched Leather MTB BMX Road Mountain Bike Bicycle Cycling Handlebar End Grips",
          price: 2.88,
          photo: "assets/handles/1.jpg"
      }, {
          id: 2,
          name: "Super Light Full Carbon Fiber Handlebar Road Bike Handlebar Bicycle Handlebar Bike Handlebar/cliber 31.8mm Bent Bar UD Glossy Finish",
          price: 45.99,
          photo: "assets/handles/2.jpg"
      }, {
          id: 3,
          name: "KINGOU Carbon Fiber PU Leather Road Bike Handlebar Tape Bar Tapes - 2PCS Per Set",
          price: 8.99,
          photo: "assets/handles/3.jpg"
      }, {
          id: 4,
          name: "NiteRider Lumina Handlebar Mount",
          price: 11.75,
          photo: "assets/handles/4.jpg"
      }, {
          id: 5,
          name: "Onedayshop® 607 A Pair Antiskid Shockproof Aluminum Alloy Locking Ring Comfy Soft TPR Rubber Handlebar Cover for Bicycle Mountain Bike BMX Folding Bike and etc (blue)",
          price: 9.99,
          photo: "assets/handles/5.jpg"
      }, {
          id: 6,
          name: "Easton Havoc 35 Handlebar",
          price: 38.36,
          photo: "assets/handles/6.jpg"
      }, {
          id: 7,
          name: "Pure Fix 42cm Alloy Bull Horn Handlebar",
          price: 24.00,
          photo: "assets/handles/7.jpg"
      }, {
          id: 8,
          name: "Brooks England Microfiber Bar Tape",
          price: 26.06,
          photo: "assets/handles/8.jpg"
      }, {
          id: 9,
          name: "TRELC Antislip Bicycle Handlebar Grips Protector For Bicycle/ Mountain Bike/ Road Bike/ Folding Bike",
          price: 8.99,
          photo: "assets/handles/9.jpg"
      }, {
          id: 10,
          name: "TOPCABIN Ergonomic Design Bicycle Handlebar Grips Widen Holding Surface",
          price: 9.80,
          photo: "assets/handles/10.jpg"
      }]
  }
};

    if($stateParams.type == 'frames')
    {
      $scope.items = $scope.inventory.products.frame
    }
    else if($stateParams.type == 'seats')
    {
      $scope.items = $scope.inventory.products.seats
    }
    else if($stateParams.type == 'forks')
    {
      $scope.items = $scope.inventory.products.forks
    }

    else if($stateParams.type == 'wheels')
    {
      $scope.items = $scope.inventory.products.wheels
    }
    else if($stateParams.type == 'handles')
    {
        console.log('wtf wtf')
        $scope.items = $scope.inventory.products.handles
    }

        console.log($scope.items)
    $scope.title = $stateParams.type

        $scope.loginFunc = function()
        {
            console.log($scope.user)
        }
	    function DialogController($scope, $mdDialog, $mdToast, item) {
		$scope.myForm = {}
		$scope.quantity = 1
		$scope.item = item
		console.log(item)
		$scope.validate = function()
		{
      CoreService.addToCart({"item": item, "quantity": $scope.quantity})
		    $mdDialog.hide()
		}


    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
    }
})();
