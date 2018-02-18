angular.module('meannasdaq').controller('SearchController', SearchController);

function SearchController (stockDataFactory){
    var vm = this;
    var Symbol = vm.Symbol;
    vm.search = function(){
        console.log("searching for " + Symbol);
        stockDataFactory.stockDisplay(Symbol).then(function(response){
        vm.stocks = response.data;
        console.log(response.data)
        })
    }
    };
        
        // $http.get('/stocks/', symbol).then(function(result){
        //         vm.error = '';
        //         }).catch(function(error){
        //             console.log(error);
        //         });
        //     }