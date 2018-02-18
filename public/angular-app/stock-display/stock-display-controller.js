angular.module('meannasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, $window, stockDataFactory){
    var vm = this;
    var id = $routeParams.id;
    var Symbol = $routeParams.Symbol;
    stockDataFactory.stockDisplay(Symbol).then(function(response){
        vm.stock = response.data;
    });

        
    };
