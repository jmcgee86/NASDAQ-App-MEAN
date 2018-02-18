var mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
    Symbol: String,
    Name: String,
    LastSale: Number,
    MarketCap: Number,
    ADRTSO: String,
    IPOYear: Number,
    Sector: String,
    Industry: String,
    SummaryQuote: String
});

stockSchema.query.bySymbol = function(Symbol) {
    return this.find({ Symbol: Symbol });
  };

//   var Stock = mongoose.model('Stock', stockSchema);
//   Stock.find().bySymbol(Symbol).exec(function(err, stocks) {
//     console.log(stocks);
//   });

mongoose.model('Stock', stockSchema, 'stocks');
// (Modelname, schemaName, collection);