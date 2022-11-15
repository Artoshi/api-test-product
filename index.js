const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

require("colors");
const connectDB = require("./config/config");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/products", require("./routes/productRoute"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`.bgCyan);
});
