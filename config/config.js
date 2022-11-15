const mongoose = require("mongoose");

require("colors");

//connect DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/apitest");
    console.log(`MongoDB Connected Successfully!`.bgGreen.inverse);
  } catch (error) {
    console.log(`Error :${error.message}`.bgRed.inverse);
    process.exit(1);
  }
};

//Export
module.exports = connectDB;
