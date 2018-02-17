/* global angular*/

angular.module('meannasdaq', ['ngRoute'])
    .config(config)

function config ($routeProvider){
    $routeProvider
    .when ('/', {
        templateUrl: 'angular-app/main/main.html',
        access:{
            restricted: false
        }
    })
    .when('/stocks',{
        templateUrl: 'angular-app/stock-list/stocks.html',
        controller: StocksController,
        controllerAs: 'vm',
        access:{
            restricted: false
        }
    })
    .when ('/stock/:id', {
        templateUrl: 'angular-app/stock-display/stock.html',
        controller: StockController,
        controllerAs: 'vm',
        access:{
            restricted: false
        }
    })

    .otherwise({
        redirectTo: '/'
    });
}