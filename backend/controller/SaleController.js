const Sale = require('../models/SalesModel');
const ErrorHandler = require('../utils/ErrorHandler.js');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

// create sale --Admin
exports.createSale = catchAsyncErrors(async (req, res, next) => {
  const sale = await Sale.create(req.body);

  res.status(201).json({
    success: true,
    sale,
  });
});

// Get All sale(Admin)
exports.getAdminSale = catchAsyncErrors(async (req, res, next) => {
  const sales = await Sale.find();

  res.status(200).json({
    success: true,
    sales,
  });
});
