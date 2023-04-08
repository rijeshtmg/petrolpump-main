const UserPurchase = require("../models/UserPurchaseModel");
// const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create purchase-user
exports.createUserPurchase = catchAsyncErrors(async (req, res, next) => {
  const userPurchase = await UserPurchase.create(req.body);

  res.status(201).json({
    success: true,
    userPurchase,
  });
});

// Get All purchase(user)
exports.getUserPurchase = catchAsyncErrors(async (req, res, next) => {
  const userPurchases = await UserPurchase.find();

  res.status(200).json({
    success: true,
    userPurchases,
  });
});
