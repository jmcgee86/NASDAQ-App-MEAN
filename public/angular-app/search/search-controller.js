    angular.module('meannasdaq').controller('SearchController', SearchController);
    
    function SearchController($http, stockDataFactory) {
        var vm = this;
        vm.search = function(){
            var symbol = vm.symbol;
            stockDataFactory.stockDisplay(symbol).then(function(response) {
            console.log(response); 
            vm.stock = response.data;
            });
        }
    }
