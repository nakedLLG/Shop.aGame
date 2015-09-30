(function(){

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController($scope, productsService){
		
		var modelProducts = function(data){
			$scope.products = data;
		}

		var modelPlatforms = function(data){
			$scope.platforms = data;
		}

		productsService.getProducts()
			.then(modelProducts);

		productsService.getPlatforms()
			.then(modelPlatforms);

		var updatePlatformsSelected = function(){
			$scope.platformsSelected = productsService.getPlatformsSelected();
		}

		$scope.productFilter = function(product){
			return productsService.productFilter(product);
		}

		$scope.platformChange = function(platform){
			productsService.platformChange(platform);
			updatePlatformsSelected();
		}

		updatePlatformsSelected();

	}

}());