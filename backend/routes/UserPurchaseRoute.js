const express = require("express");
const {
  createUserPurchase,
  getUserPurchase,
} = require("../controller/UserPurchaseController");

const router = express.Router();

router.route("/user/purchase").get(getUserPurchase);

router.route("/user/userpurchase").post(createUserPurchase);

module.exports = router;
