(function() {
  var app = angular.module('store', []);

  var gems = [{
      name: 'Dodecahedron',
      price: 2.95,
      description: '. . .',
      canPurchase: true,
      soldOut: false
    }, {
        name: 'Pentagonal   Gem',
        price: 5.95,
        description: '. . .',
        canPurchase: true,
        soldOut: false
      }]
  // Note that the controller is inside the app module
  app.controller('StoreController', function() {
    this.products = gems;
  });


})();
