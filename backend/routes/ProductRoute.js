const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  getAdminProducts,
} = require("../controller/ProductController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
const Product = require("../models/ProductModel");

//router.use(isAuthenticatedUser);
router.route("/products").get(getAllProducts);

router.route("/admin/products").get(getAdminProducts);

router.route("/product/new").post(authorizeRoles("admin"), createProduct);

router.put(
  "/products/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { stock: req.body.stock },
        { new: true }
      );

      res.status(200).json(updatedProduct);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getSingleProduct);

module.exports = router;
