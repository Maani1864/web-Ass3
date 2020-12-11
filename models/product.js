var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: String,
    model: String,
    price: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;