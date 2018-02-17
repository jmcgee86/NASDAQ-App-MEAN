angular.module('meannasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, $window, stockDataFactory){
    var vm = this;
    var id = $routeParams.id;
    stockDataFactory.stockDisplay(id).then(function(response){
        vm.stock = response.data;
    });

        
    };
