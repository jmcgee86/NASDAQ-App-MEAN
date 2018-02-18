var express = require('express');
var router = express.Router();


var ctrlStocks = require('../controllers/stocks.controllers.js');
var ctrlUsers = require('..//controllers/users.controllers.js');


router
    .route('/stocks')
    .get(ctrlStocks.stocksGetAll)

// router
//     .route('/stocks/:stockId')
//     .get(ctrlStocks.stocksGetOne)
    
router
    .route('/stocks/:symbol')
    .get(ctrlStocks.stocksFind)
    

router
    .route('/users/register')
    .post(ctrlUsers.register);

router
    .route('/users/login')
    .post(ctrlUsers.login);

module.exports = router;