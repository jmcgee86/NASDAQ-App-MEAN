    angular.module('meannasdaq').controller('SearchController', SearchController);
    
    function SearchController($http, stockDataFactory) {
        var vm = this;
        vm.search = function(){
            vm.isSubmitted = false;
            var symbol = vm.symbol.toUpperCase();
            stockDataFactory.stockDisplay(symbol).then(function(response) {
            console.log(response);
            if(!response){
                vm.error = "Cannot find stock";
            }else{
            vm.stock = response.data;
            var postData = "";
            stockDataFactory.postQuery(symbol, postData).then(function(response){
            }).catch(function(error){
                console.log(error);
            });
            vm.isSubmitted = true;
            }
            });
        }
    }
