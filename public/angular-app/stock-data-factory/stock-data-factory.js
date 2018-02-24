angular.module('meannasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http){
    return{
        stockList: stockList,
        stockDisplay: stockDisplay,
        postQuery: postQuery,
        displayQueries: displayQueries,
        postUserQuery: postUserQuery,
        getUser: getUser,
        saveUserStock, saveUserStock
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
    
    function displayQueries(){
        return $http.get('api/queries').then(complete).catch(failed);
    }
    
    function postUserQuery(User, userQuery){
        return $http.post('api/users/' + User + '/searches', userQuery).then(complete).catch(failed);
    }
    
    function getUser(User){
        return $http.get('api/users/' + User).then(complete).catch(failed);
    }
    
    function saveUserStock(User, Stock){
        return $http.post('api/users/' + User + '/save', Stock).then(complete).catch(failed);
    }
    
    function complete(response){
        return response;
    }
    
    function failed (error){
        console.log(error.statusText);
    }
}