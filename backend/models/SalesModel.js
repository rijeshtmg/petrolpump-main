const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
    maxLength: [10, "S.N must not exceed 10 Digit"],
  },

  product: {
    type: String,
    required: [true, "Please add a name of your product"],
  },
  quantity: {
    type: String,
    required: [true, "Please add a quantity of your product"],
  },
  rate: {
    type: String,
    required: [true, "Please add a rate of your product"],
  },
});

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name of a product"],
    trim: true,
    maxLength: [20, "Product name not exceed than 20 characters"],
  },
  list: [listSchema],
  total: {
    type: String,
    required: true,
    trim: true,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Sale", purchaseSchema);
