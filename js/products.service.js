(function(){
"use strict";


	var productsService = function($http){

		var platformsSelected = [];

		var getProducts = function(){
			return $http.get("data/products.json")
						.then(function(response){
							return response.data;
						})
		};
		var findProductInArray = function(data, id) {
			return data.filter(function (element) {
				if (element.id === id) {
					return element;
				}
			});
		}
		var getPlatforms = function(){
			return $http.get("data/platforms.json")
						.then(function(response){
							return response.data;
						})
		};

		var getPlatformsSelected = function(){
      		return platformsSelected;
      	}

		var platformChange = function(platform){
			var i = platformsSelected.indexOf(platform);
            if (i > -1) {
                platformsSelected.splice(i, 1);
            } 
            else {
                platformsSelected.push(platform);
            }

        };
        var productFilter = function(product){
				if (platformsSelected.length > 0) {
					if (platformsSelected.indexOf(product.platform) < 0){
						return;
					}
				}
				return product;
        }  


		return {
			getProducts: getProducts,
			getPlatforms: getPlatforms,
			productFilter: productFilter,
			platformChange: platformChange,
			getPlatformsSelected: getPlatformsSelected
		}

	}

	angular
		.module("Main")
		.factory("productsService", productsService);

}());