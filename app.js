(function() {
  var app = angular.module('store', []);

  var gems = [{
      name: 'Dodecahedron',
      price: 2.95,
      description: '. . .',
      canPurchase: true,
      soldOut: false,
      images: [{
        full: "images/dodecahedron-01-full.jpg",
        thumb: "images/dodecahedron-01-thumb.jpg"
      }, {
        full: "images/dodecahedron-02-full.jpg",
        thumb: "images/dodecahedron-02-thumb.jpg"
      }]
    }, {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: '. . .',
        canPurchase: true,
        soldOut: false,
        images: [{
          full: "images/pentagonal-01-full.jpg",
          thumb: "images/pentagonal-01-thumb.jpg"
        }, {
          full: "images/pentagonal-02-full.jpg",
          thumb: "images/pentagonal-02-thumb.jpg"
        }]
      }]
  // Note that the controller is inside the app module
  app.controller('StoreController', function() {
    this.products = gems;
  });


})();
