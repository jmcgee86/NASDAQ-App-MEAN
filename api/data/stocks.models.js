var mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
    Symbol: String,
    Name: String,
    LastSale: Number,
    MarketCap: Number,
    ADRTSO: String,
    IPOYear: Number,
    SummaryQuote: String,
    Sector: String,
    Industry: String,
    SummaryQuote: String
});

mongoose.model('Stock', stockSchema, 'stocks');
// (Modelname, schemaName, collection);