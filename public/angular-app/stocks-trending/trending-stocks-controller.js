// angular.module('meannasdaq').controller('TrendingStocksController', TrendingStocksController);

// function TrendingStocksController(stockDataFactory){
//     var vm = this;
//     vm.title = 'Trending Stocks';

//     vm.trendingMarket = function(){
//     stockDataFactory.stockTrending("MarketCap").then(function(response){
//         vm.stocks = response.data;
//         console.log(response.data)
//     });
// }

//     vm.trendingPrice = function(){
//     stockDataFactory.stockTrendingSale().then(function(response){
//         vm.stocks = response.data;
//         console.log(response.data)
//     });
// }

// }

angular.module('meannasdaq').controller('TrendingStocksController', TrendingStocksController);

function TrendingStocksController(stockDataFactory){
    var vm = this;
    vm.title = 'Trending Stocks';
    vm.saleSubmitted = false;
    vm.marketSubmitted=false;

    vm.trending = function(selection){
    stockDataFactory.stockTrending(selection).then(function(response){
        vm.stocks = response.data;
        console.log(response.data)
    });
}

    vm.salePrice = function(){
        vm.marketSubmitted=false;
        vm.saleSubmitted = true;
        
    }
    
    vm.marketCap = function(){
        vm.saleSubmitted = false;
        vm.marketSubmitted=true;

    }

}
