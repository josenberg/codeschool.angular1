(function() {
  var app = angular.module('store', []);


  /*
    using ID starting with zero just because this is a studing case
   */
  var gems = [{
      name: 'Dodecahedron',
      price: 2.95,
      description: '. . .',
      canPurchase: true,
      soldOut: false,
      images: [{
        id: 0,
        full: "images/dodecahedron-01-full.jpg",
        thumb: "images/dodecahedron-01-thumb.jpg"
      }, {
        id: 1,
        full: "images/dodecahedron-02-full.jpg",
        thumb: "images/dodecahedron-02-thumb.jpg"
      }],
      reviews: [{
        stars: 5,
        body: "i love this product",
        author: "mbx.philipe@gmail.com"
      }, {
        stars: 2,
        body: "Nah",
        author: "mbx.philipe@gmail.com"
      }]
    }, {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: '. . .',
        canPurchase: true,
        soldOut: false,
        images: [{
          id: 0,
          full: "images/pentagonal-01-full.jpg",
          thumb: "images/pentagonal-01-thumb.jpg"
        }, {
          id: 1,
          full: "images/pentagonal-02-full.jpg",
          thumb: "images/pentagonal-02-thumb.jpg"
        }],
        reviews: [{
          stars: 5,
          body: "i love this product",
          author: "mbx.philipe@gmail.com"
        }, {
          stars: 2,
          body: "Nah",
          author: "mbx.philipe@gmail.com"
        }]
      }];
  // Note that the controller is inside the app module
  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('GalleryController', function() {
    this.currentId = 0;

    this.setCurrentId = function(value) {
      this.currentId = value || 0;
    }

    this.isCurrentId = function(value) {
      return this.currentId === value;
    }
  })


  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(tab) {
        this.tab = tab;
    };
    this.isSelect = function(tab) {
        return this.tab === tab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };

  });

})();
