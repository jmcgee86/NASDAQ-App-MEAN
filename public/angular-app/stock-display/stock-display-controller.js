angular.module('meannasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, $window, stockDataFactory, AuthFactory, jwtHelper){
    var vm = this;
    var id = $routeParams.id;
    var Symbol = $routeParams.Symbol;
    
    stockDataFactory.stockDisplay(Symbol).then(function(response){
        vm.stock = response.data;
    });
    
    vm.isLoggedIn = function(){
        if (AuthFactory.isLoggedIn){
        return true;
        }else{
        return false;
        }
    };
    
    vm.saveStock = function (){
        vm.isSaved = false;
        var postSavedStock ={
              symbol: $routeParams.Symbol
            }
        
        var token = $window.sessionStorage.token;
        var decodedToken = jwtHelper.decodeToken(token);
        var User = decodedToken.username;
        
        stockDataFactory.saveUserStock(User, postSavedStock).then(function(response){
                }).catch(function(error){
                console.log(error)
            })
        vm.isSaved = true;

    }

    
    };
