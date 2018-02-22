angular.module('meannasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http){
    return{
        stockList: stockList,
        stockDisplay: stockDisplay,
        postQuery: postQuery
    };
    
    function stockList(){
        return $http.get('/api/stocks?count=10').then(complete).catch(failed);
    }
    
        function stockDisplay(Symbol){
        return $http.get('/api/stocks/' + Symbol).then(complete).catch(failed);
    }
    
    function postQuery(Symbol, Query){
        return $http.post('/api/stocks/' + Symbol +'/queries', Query).then(complete).catch(failed);
    }
    
    function complete(response){
        return response;
    }
    
    function failed (error){
        console.log(error.statusText);
    }
}