var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productlisting = new Schema({
    productname: String,
    description: String,
    companyname: String,
    price: String,
    quantity: Number

});

module.exports = mongoose.model('ProductListing', productlisting);