const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
    maxLength: [10, 'S.N must not exceed 10 Digit'],
  },

  product: {
    type: String,
    required: [true, 'Please add a description of your product'],
    maxlength: [200, 'Description is can not exceed than 4000 characters'],
  },
  quantity: {
    type: String,
    required: [true, 'Please add a description of your product'],
    maxlength: [200, 'Description is can not exceed than 4000 characters'],
  },
  rate: {
    type: String,
    required: [true, 'Please add a description of your product'],
    maxlength: [200, 'Description is can not exceed than 4000 characters'],
  },
});

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name of a product'],
    trim: true,
    maxLength: [20, 'Product name not exceed than 20 characters'],
  },
  list: [listSchema],
  total: {
    type: String,
    required: [true, 'Please enter a name of a product'],
    trim: true,
    maxLength: [20, 'Product name not exceed than 20 characters'],
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Sale', purchaseSchema);
