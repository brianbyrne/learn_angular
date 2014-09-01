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
	
	var gems = [{
		name: 'Something',
		price: 2.95,
		description: '...',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Something else',
		price: 7.95,
		description: '...',
		canPurchase: true,
		soldOut: false
	}]
	
})();