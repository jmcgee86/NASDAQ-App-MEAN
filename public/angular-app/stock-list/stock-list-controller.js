angular.module('meannasdaq').controller('StocksController', StocksController);

function StocksController(stockDataFactory){
    var vm = this;
    vm.title = 'MEAN Stock App';
    stockDataFactory.stockList().then(function(response){
        vm.stocks = response.data;
        console.log(response.data)
    });
}
