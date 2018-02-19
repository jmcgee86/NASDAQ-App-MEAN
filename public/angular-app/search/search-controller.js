angular.module('meannasdaq').controller('SearchController', SearchController);

function SearchController ($http, $route, $routeParams, $window, stockDataFactory){
    var vm = this;
    vm.search = function(){
        var Symbol = vm.symbol;
        console.log("searching for " + Symbol);
        
         $http.get('/api/stocks/', Symbol).then(function(result){
        console.log(result);
                    vm.stock = result.data;
                    vm.error = '';
                }).catch(function(error){
                    console.log(error);
                });
        
        
        // stockDataFactory.stockDisplay(Symbol).then(function(response){
        // vm.stock = response.data;
        // console.log(response.data)
        // })
    
    }
    };