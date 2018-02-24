var mongoose = require ('mongoose');
var stockSchema = mongoose.model('Stock');

var searchesSchema = new mongoose.Schema({
    createdOn: {
        type: Date,
        "default": Date.now
    },
    symbol: String
});


var savedStocksSchema = new mongoose.Schema({
    createdOn: {
        type: Date,
        "default": Date.now
    },
    symbol: { type: String, unique: true }
})

var userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    
    searches: [searchesSchema],
    
    savedStocks: [savedStocksSchema]
    
});

mongoose.model('User', userSchema, 'users');