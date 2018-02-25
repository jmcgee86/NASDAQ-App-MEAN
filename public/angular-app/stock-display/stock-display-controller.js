/*global $ APIKEY */

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
    
//     vm.getArticles = function(){
        
//         $.ajax({
// 		method: "GET",
// 		url: "https://newsapi.org/v2/everything",
// 		data: {
// 			q: "tesla",
// 			sources: "bloomberg,business-insider,financial-times,fortune,financial-post,the-wall-street-journal,australian-financial-review",
// 			sortBy: "relevancy",
// 			language: "en",
// 			apiKey: "60d74e8e84764b9e956aab8a84b11ca0"
// 		}
//     },
//     	success: function(data) {
// 			if (data.status === "ok") {
// 				console.log(data);
// 			}
    
//     )
// }
    
//     $(document).ready(function() {
// 	$.ajax({
// 		method: "GET",
// 		url: "https://newsapi.org/v2/everything",
// 		data: {
// 			//category: "general",
// 			q: "tesla",
// 			sources: "bloomberg,business-insider,financial-times,fortune,financial-post,the-wall-street-journal,australian-financial-review",
// 			//from: 2015-01-01,
// 			sortBy: "relevancy",
// 			language: "en",
// 			apiKey: APIKEY
// 		},
// 		success: function(data) {
// 			if (data.status === "ok") {
// 				console.log(data);

// 			}
// 		}
// 	});
//     }

//$(document).ready(function() {

vm.getArticles = function(){
	$.ajax({
		method: "GET",
		url: "https://newsapi.org/v2/everything",
		data: {
			//category: "general",
			q: vm.stock.Name,
			sources: "bloomberg,business-insider,financial-times,fortune,financial-post,the-wall-street-journal,australian-financial-review",
			//from: 2015-01-01,
			sortBy: "relevancy",
			language: "en",
			apiKey: APIKEY //process.env.KEY1 // //"60d74e8e84764b9e956aab8a84b11ca0"
		},
		success: function(data) {
			if (data.status === "ok") {
				console.log(data);
				
			}
		}
	});
}
//});

    
    };
    
    
