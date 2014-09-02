(function(){
	var app = angular.module('gemStore', []);
	
	app.controller('StoreController', function() {
		this.products = gems;
	});
	
	app.controller('PanelController', function() {
		this.tab =  1;
		
		this.selectTab =  function(setTab) {
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab) {
			return this.tab == checkTab;
		};
		
	});
	
	app.controller('ReviewController', function() {
		this.review = {};
		
		this.addReview = function(product) {
			// brian note, that we push the current review on to the supplied product
			product.reviews.push(this.review);
			// clear live preview
			this.review = {};
		};
	});
	
	var gems = [{
		name: 'Something',
		price: 2.95,
		description: '...',
		canPurchase: true,
		soldOut: false,
		reviews: []
	},
	{
		name: 'Something else',
		price: 7.95,
		description: '...',
		canPurchase: true,
		soldOut: false,
		reviews: []
	}]
	
})();