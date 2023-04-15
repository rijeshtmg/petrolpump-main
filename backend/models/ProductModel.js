const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  sn: {
    type: Number,
    required: true,
    unique: true,
    maxLength: [10, "S.N must not exceed 10 Digit"],
  },
  name: {
    type: String,
    required: [true, "Please enter a name of a product"],
    trim: true,
    unique: true,
    maxLength: [20, "Product name not exceed than 20 characters"],
  },
  supplier: {
    type: String,
    required: [true, "Please add a supplier name of your product"],
    maxlength: [200, "Description is can not exceed than 4000 characters"],
  },
  supprice: {
    type: Number,
    required: [true, "Please add a price for your product"],
    maxLength: [8, "Price can not exceed than 8 characters"],
  },
  saleprice: {
    type: Number,
    required: true,
    maxLength: [8, "Sale price can not exceed than 10 characters"],
  },
  unit: {
    type: String,
    required: [true, "Please add a unit for your product"],
  },
  stock: {
    type: Number,
    required: [true, "Please add a stock for your product"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
