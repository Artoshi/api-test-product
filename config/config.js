const mongoose = require("mongoose");
require("dotenv").config();
require("colors");

//connect DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/apitest"
    );
    console.log(`MongoDB Connected Successfully!`.bgGreen.inverse);
  } catch (error) {
    console.log(`Error :${error.message}`.bgRed.inverse);
    process.exit(1);
  }
};

//Export
module.exports = connectDB;
