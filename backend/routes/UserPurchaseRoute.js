const express = require("express");
const {
  createUserPurchase,
  getUserPurchase,
} = require("../controller/UserPurchaseController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();
router.use(isAuthenticatedUser);

router.route("/user/purchase").get(getUserPurchase);

router.route("/user/userpurchase").post(createUserPurchase);

module.exports = router;
