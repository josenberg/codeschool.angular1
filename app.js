(function() {
  var app = angular.module('store', []);

  // Note that the controller is inside the app module
  app.controller('StoreController', function() {
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .'
  }
})();
