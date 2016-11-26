(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('CoreService', CoreService);

  /** @ngInject */
  function CoreService($http, $q, logger, $rootScope, $modal, $state, $mdToast, $cookies) {
      var users = {}
      var currentUser = null
      var currentCart = []
      var orders = []

      var service = {
          goToProfile: goToProfile,
          logout: logout,
          addUser: addUser,
          isAuthenticated: isAuthenticated,
          login: login,
          goToCart: goToCart,
          goToHomePage: goToHomePage,
          goToBikePart: goToBikePart,
          goToCustomBike: goToCustomBike,
          notification: notification,
          goToLogin: goToLogin,
          goToRegister: goToRegister,
          getCurrentUser: getCurrentUser,
          updateUser: updateUser,
          getCart : getCart,
          updateCart : updateCart,
          addToCart: addToCart,
          goToCheckout: goToCheckout,
          setCurrentUser: setCurrentUser,
          placeOrder: placeOrder,
          getPastOrders: getPastOrders,
          orders : orders
      };

      function getPastOrders(username)
      {
          return $http.get("api/order/" + username)
      }
      function placeOrder(username, order)
      {
          return $http.post("api/order/" + username, order)
      }
      function getCart()
      {
          if ($cookies.getObject('cart') == 'undefined' || $cookies.getObject('cart') == null)
          {
              return []
          }
          else {
              return $cookies.getObject('cart')
          }
      }
      function updateCart(cart)
      {
          $cookies.putObject('cart', cart)
      }
      function addToCart(item)
      {
          var cart = getCart()
          console.log('this is the cart');
          console.log(cart)
          if (cart == null || cart == 'undefined')
        {
            cart = []
        }
      cart.push(item)
      updateCart(cart)
    }
    function updateUser(username, user)
      {
        console.log(user)
        setCurrentUser(user)
      return $http.put('api/user/' + username, user)
    }
    function getCurrentUser()
    {
        if ($cookies.getObject('user') == 'undefined' || $cookies.getObject('user') == null)
        {
            return null
        }
        else {
            return $cookies.getObject('user')
        }
    }
    function setCurrentUser(user)
    {
      $cookies.putObject('user', user)
      console.log(getCurrentUser())
    }
    function notification(message)
    {
      $mdToast.show(
		    $mdToast.simple()
			.textContent(message)
			.hideDelay(3000)
			)
    }
    function goToCheckout()
    {
      $state.go('checkout');
    }
    function goToProfile()
    {
      $state.go('profile');
    }
    function goToRegister()
    {
      $state.go('register');
    }
    function goToLogin()
    {
      $state.go('login');
    }
    function addUser(newUser)
    {
        $http.post('api/user', newUser).success(function (response) {
            console.log(response)
        })
              .error(function (data, status, headers, config) {
                  notification("unable to add user");
                  console.log(data)
                  console.log(status)
                  console.log(headers)
                  console.log(config)
              });
      setCurrentUser(newUser)
    }

    function logout()
    {
      setCurrentUser(null)
      goToHomePage()
    }
    function login(username, password)
    {
        setCurrentUser(null)
        var url = 'api/user/validate/' + username + '/' + password
        return $http.get(url)

    }
    function isAuthenticated()
    {
        if (getCurrentUser() == null || getCurrentUser() == {})
        {
          return false;
        }
        else {
          return true
        }
    }
    function goToHomePage()
    {
      $state.go('home');
    }
    function goToCart()
    {
      $state.go('cart');
    }
    function goToBikePart(type)
    {
      $state.go('bikepart', {'type': type});
    }
    function goToCustomBike()
    {
      $state.go('custombikepage');
    }


    return service;

  }

})();
