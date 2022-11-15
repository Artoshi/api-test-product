const productModel = require("../models/productModel");

//GET products
const getProductController = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

//ADD product
const addProductController = async (req, res) => {
  try {
    const newProduct = new productModel(req.body);
    await newProduct.save();
    res
      .status(201)
      .send("เพิ่มข้อมูลสินค้าเสร็จสมบูรณ์ ขอบคุณที่ใช้บริการค่ะ!");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

//UPDATE product
const updateProductController = async (req, res) => {
  try {
    const { productID } = req.body;
    console.log(productID);
    await productModel.findOneAndUpdate({ _id: req.body.productID }, req.body, {
      new: true,
    });
    res
      .status(201)
      .json("อัปเดตข้อมูลสินค้าเสร็จสมบูรณ์ ขอบคุณที่ใช้บริการค่ะ!");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

// DELETE product
const deleteProductController = async (req, res) => {
  try {
    const { productID } = req.body;
    await productModel.findOneAndDelete({ _id: productID });
    res.status(200).json("ลบข้อมูลสินค้าเสร็จสมบูรณ์ ขอบคุณที่ใช้บริการค่ะ");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

module.exports = {
  getProductController,
  addProductController,
  updateProductController,
  deleteProductController,
};
