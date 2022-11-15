const express = require("express");
const {
  getProductController,
  addProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/productController");

const router = express.Router();

// METHOD GET
router.get("/", getProductController);
// METHOD POST
router.post("/add", addProductController);
// METHOD UPDATE
router.put("/update", updateProductController);
// METHOD DELETE
router.post("/delete", deleteProductController);

module.exports = router;
