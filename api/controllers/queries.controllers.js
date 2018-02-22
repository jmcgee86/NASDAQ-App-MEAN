var mongoose = require ('mongoose');
var Stock = mongoose.model('Stock');

var _addQuery = function (req, res, stock){
    
    stock.Queries.push({
    });
    
    stock.save(function(err, stockUpdated){
        if (err){
            res
                .status(500)
                .json(err);
        }else{
            res
                .status(201)
                .json(stockUpdated.Queries[stockUpdated.Queries.length -1]);
        };
            
    });
};

module.exports.queriesAddOne = function (req,res){
    //var stockId = req.params.stockId;
    var stockSymbol = req.params.symbol;

    Stock    
    .findOne({Symbol:stockSymbol})
    .select('Queries')//only returns queries instead of all the stock data
    .exec(function(err, doc){
        if (err){
            console.log("error finding stock")
            res
                .status(500)
                .json(err);
        }else if(!doc){
            console.log("stock symbol of " + stockSymbol + " not found in database")
            res
                .status(404)
                .json({
                    "message": "stock symbol of " + stockSymbol + " not found"
                });
        }if (doc){
            _addQuery(req,res,doc)
        }
    });
};