var express = require('express');
var router = express.Router();


var ctrlStocks = require('../controllers/stocks.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');
var ctrlQueries = require('..//controllers/queries.controllers.js');


router
    .route('/stocks')
    .get(ctrlStocks.stocksGetAll)
    
router
    .route('/stocks/:symbol')
    .get(ctrlStocks.stocksFind)
    

router
    .route('/users/register')
    .post(ctrlUsers.register);

router
    .route('/users/login')
    .post(ctrlUsers.login);
    
router
    .route('/stocks/:symbol/queries')
    //.get(ctrlQueries.queriesGetAll)
    .post(ctrlQueries.queriesAddOne);
    
router
    .route('/queries')
    .get(ctrlQueries.queriesGetAll);

module.exports = router;