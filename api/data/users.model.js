var mongoose = require ('mongoose');
//var stockSchema = mongoose.model('Stock');

var searchesSchema = new mongoose.Schema({
    createdOn: {
        type: Date,
        "default": Date.now
    },
    symbol: String
});

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
    
    searches: [searchesSchema]
    
});

mongoose.model('User', userSchema, 'users');