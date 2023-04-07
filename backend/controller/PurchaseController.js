const Purchase = require("../models/PurchaseModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create Purchase --Admin
exports.createPurchase = catchAsyncErrors(async (req, res, next) => {
  const purchase = await Purchase.create(req.body);

  res.status(201).json({
    success: true,
    purchase,
  });
});

// Get All Purchase(Admin)
exports.getAdminPurchase = catchAsyncErrors(async (req, res, next) => {
  const purchases = await Purchase.find();

  res.status(200).json({
    success: true,
    purchases,
  });
});



// delete Purchase
exports.deletePurchase = catchAsyncErrors(async (req, res, next) => {
  const purchase = await Purchase.findById(req.params.id);

  if (!purchase) {
    return next(new ErrorHandler("Purchase is not found with this id", 404));
  }

  await purchase.remove();

  res.status(200).json({
    success: true,
    message: "Purchase deleted succesfully",
  });
});