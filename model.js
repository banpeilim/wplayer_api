const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const rateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  vote: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
const Rate = mongoose.model("Rate", rateSchema);

module.exports = { Product, Rate };
