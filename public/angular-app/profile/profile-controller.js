angular.module('meannasdaq').controller('ProfileController', ProfileController);

function ProfileController($route,$routeParams, $window, stockDataFactory, AuthFactory, jwtHelper, $timeout){
    var vm = this;
    var token = $window.sessionStorage.token;
    var decodedToken = jwtHelper.decodeToken(token);
    var User = decodedToken.username;
    stockDataFactory.getUser(User).then(function(response) {
        if(!response){
            vm.error = "Cannot find user";
        }else{
            vm.loggedUser = response.data;
            console.log(vm.loggedUser);
            }
            }).catch(function(error){
                console.log(error);
            });
            
            
    vm.deleteArticle = function (articleId){
        var token = $window.sessionStorage.token;
        var decodedToken = jwtHelper.decodeToken(token);
        var User = decodedToken.username;


      stockDataFactory.deleteSavedArticle(User, articleId).then(function(response){
                }).catch(function(error){
                console.log(error)
            })
    stockDataFactory.getUser(User).then(function(response) {
        if(!response){
            vm.error = "Cannot find user";
        }else{
            vm.loggedUser = response.data;
            console.log(vm.loggedUser);
            console.log(vm.loggedUser[0].username);
            }
            }).catch(function(error){
                console.log(error);
            });
    }
    
    vm.deleteStock = function (stockId){
        var token = $window.sessionStorage.token;
        var decodedToken = jwtHelper.decodeToken(token);
        var User = decodedToken.username;
        
        stockDataFactory.deleteSavedStock(User, stockId).then(function(response){
        }).catch(function(error){
            console.log(error)
        })
        stockDataFactory.getUser(User).then(function(response) {
        if(!response){
            vm.error = "Cannot find user";
        }else{
            vm.loggedUser = response.data;
            console.log(vm.loggedUser);
            console.log(vm.loggedUser[0].username);
            }
            }).catch(function(error){
                console.log(error);
            });
    }


    vm.sellStock = function (stockId, symbol){
        var token = $window.sessionStorage.token;
        var decodedToken = jwtHelper.decodeToken(token);
        var User = decodedToken.username;
        
        $.ajax({
             url:'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + symbol + '&interval=1min&apikey=' + stockPriceKey,
             success: function(priceData){
                console.log(priceData);
		      if (priceData) {
			    vm.priceData = priceData;
                vm.lastUpdated = priceData["Meta Data"]["3. Last Refreshed"];
                var mostRecent = priceData["Time Series (1min)"][vm.lastUpdated]
                var livePrice = mostRecent["4. close"];
                if (livePrice){
                    var sellInfo = {
                        stockId: stockId,
                        sellPrice: livePrice,
                }
        
            stockDataFactory.sellStock(User, sellInfo).then(function(response){
            }).catch(function(error){
                console.log(error)
            })
            stockDataFactory.getUser(User).then(function(response) {
            if(!response){
                vm.error = "Cannot find user";
            }else{
                vm.loggedUser = response.data;
            }
                }).catch(function(error){
                console.log(error);
            });
                    
                }
		      }

          }
        })
}
}