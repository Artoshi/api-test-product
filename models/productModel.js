const mongoose = require("mongoose");

const current = new Date();
const timeStamp = new Date(
  Date.UTC(
    current.getFullYear(),
    current.getMonth(),
    current.getDate(),
    current.getHours(),
    current.getMinutes(),
    current.getSeconds(),
    current.getMilliseconds()
  )
);

const productSchema = mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
    },
    sweet: {
      type: Array,
    },
    timestamp: {
      type: Date,
      default: timeStamp,
    },
  },

  { _id: false }
);

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
