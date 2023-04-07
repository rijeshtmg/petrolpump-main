const express = require("express");
const {
  createPurchase,
  getAdminPurchase,
} = require("../controller/PurchaseController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router
  .route("/admin/purchases")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminPurchase);

router
  .route("/purchase/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createPurchase);

module.exports = router;
