const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
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
    maxLength: [20, "Product name not exceed than 20 characters"],
  },
  supplier: {
    type: String,
    required: [true, "Please add a supplier name of your product"],
  },
  supprice: {
    type: Number,
    required: [true, "Please add a price for your product"],
  },
  stock: {
    type: Number,
    required: [true, "Please add a stock for your product"],
  },
  totalamount: {
    type: Number,
    required: true,
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

module.exports = mongoose.model("Purchase", purchaseSchema);
