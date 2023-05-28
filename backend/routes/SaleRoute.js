const express = require("express");
const { createSale, getAdminSale } = require("../controller/SaleController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/sales").get(isAuthenticatedUser, getAdminSale);

router.route("/sales").post(createSale);

module.exports = router;
