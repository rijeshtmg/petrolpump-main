const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  let { authorization: token } = req.headers;

  if (!token) {
    return next(new ErrorHandler("Please Login for access this resource", 401));
  }
  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

    let user = await User.findOne({ email: decodedData.id });

    if (!user) {
      return next(new ErrorHandler("User doesnot exists", 401));
    }
    req.user = user;

    next();
  } catch (error) {
    return next(new ErrorHandler("Please Login  access this resource", 401));
  }
};
// const ErrorHandler = require("../utils/ErrorHandler");
// const catchAsyncErrors = require("./catchAsyncErrors");
// const jwt = require("jsonwebtoken");
// const User = require("../models/UserModel");

// exports.isAuthenticatedUser = catchAsyncErrors(async (req,res,next) =>{
//     const { token } = req.cookies;

//   if (!token) {
//     return next(new ErrorHandler("Please Login for access this resource", 401));
//   }

//   const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

//   req.user = await User.findById(decodedData.id);

//   next();
// });

// Admin Roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role)) {
      return next(
        new ErrorHandler(`${req.user.role} can not access this resources`)
      );
    }
    next();
  };
};
