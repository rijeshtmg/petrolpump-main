const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  userDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
  AdminUser,
} = require("../controller/UserController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/registration").post((req, res, next) => {
  next();
}, createUser);

router.route("/login").post((req, res, next) => {
  console.log(req.body);
  return next();
}, loginUser);

router.route("/logout").get(logoutUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/me/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update/info").put(isAuthenticatedUser, updateProfile);

router.route("/me").get(isAuthenticatedUser, userDetails);

router.route("/admin/users").get(getAllUsers);

router
  .route("/admin/user/:id")
  .get(getSingleUser)
  .put(updateUserRole)
  .delete(deleteUser);

router.route("/stores").get(AdminUser);

module.exports = router;
