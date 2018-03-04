/*global $ APIKEY */

angular.module('meannasdaq').controller('StockController', StockController);

function StockController($route, $routeParams, $window, stockDataFactory, AuthFactory, jwtHelper, $timeout){
    var vm = this;
    var id = $routeParams.id;
    var Symbol = $routeParams.Symbol;
    var token = $window.sessionStorage.token;
    var decodedToken = jwtHelper.decodeToken(token);
    var User = decodedToken.username;

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

 vm.getArticles = function(){
     
     if (AuthFactory.isLoggedIn){
 
$.ajax({
		method: "GET",
		url: "https://newsapi.org/v2/everything",
		data: {
			q: "+" + vm.stock.Name,
			sources: "bloomberg,business-insider,financial-times,fortune,financial-post,the-wall-street-journal,australian-financial-review",
			language: "en",
			sortBy: 'relevance',
			pageSize: 10,
			apiKey: APIKEY //APIKEY from newsapi.org - in /angular-app/stock-display/key.js
		},
		success: function(data) {
		    console.log(data)
		      $timeout (function(){
		          if (data.status === "ok") {
			    vm.articles = data.articles;

			if(data.articles.length>0){
			    vm.foundArticles = true;
			}  else{
			    vm.noArticles = true;
			}
		      }
		      })     
		}
	});
     }else{
         vm.pleaseLogin =true
     }
}


    vm.tweetIt = function(articlePreview, articleUrl){
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(articlePreview + " " + articleUrl));
							
    }
  
   vm.saveArticle = function( articleTitle, articleUrl, articleSource){
        var token = $window.sessionStorage.token;
        var decodedToken = jwtHelper.decodeToken(token);
        var User = decodedToken.username;
        var postUserArticle = {
          title: articleTitle,
          url: articleUrl,
          articleSource: articleSource
        }
        
      stockDataFactory.saveUserArticle(User, postUserArticle).then(function(response){
                }).catch(function(error){
                console.log(error)
            })
    }
    
    vm.buyStock = function (){
        var token = $window.sessionStorage.token;
        var decodedToken = jwtHelper.decodeToken(token);
        var User = decodedToken.username;
        var totalPrice = parseInt(vm.shares) * vm.stock.LastSale //need to double check variables and function
        
        if(vm.loggedUser[0].yourBalance<totalPrice){
            vm.noFunds = true;
        }
        else{
        
        var buyInfo = {
            stockSymbol: $routeParams.Symbol,
            stockPrice: vm.stock.LastSale, //need to double check exact vm.....
            shares: vm.shares, //this comes from user form input on stock.html
            totalPrice: totalPrice
        }

        stockDataFactory.buyStock(User, buyInfo).then(function(response){
        }).catch(function(error){
            console.log(error)
        });
        vm.sale = true;
        }
    }
    
    };
    
  
    
    
