const UserPurchase = require("../models/UserPurchaseModel");
// const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create purchase-user
exports.createUserPurchase = catchAsyncErrors(async (req, res, next) => {
  const userPurchase = await UserPurchase.create({
    ...req.body,
    user: req.user.id,
  });

  res.status(201).json({
    success: true,
    userPurchase,
  });
});

// Get All purchase(user)
exports.getUserPurchase = catchAsyncErrors(async (req, res, next) => {
  console.log(req.user);
  const userPurchases = await UserPurchase.find({
    user: req.user.id,
  });

  res.status(200).json({
    success: true,
    userPurchases,
  });
});
