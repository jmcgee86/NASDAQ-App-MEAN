angular.module('meannasdaq').controller('SearchController', SearchController);

function SearchController ($scope, $http, $route, $routeParams, $window, stockDataFactory){
    var vm = this;
    
    $scope.search = function(){
        console.log("searching for " + Symbol);
        Symbol=vm.symbol;
        
        
        stockDataFactory.stockDisplay(Symbol).then(function(response){
        vm.stock = response.data;
        console.log(response.data)
        })
    
    
    };
}
    
            //  $http.get('/api/stocks/', Symbol).then(function(result){
        // console.log(result);
        //             vm.stock = result.data;
        //             vm.error = '';
        //         }).catch(function(error){
        //             console.log(error);
        //         });
        