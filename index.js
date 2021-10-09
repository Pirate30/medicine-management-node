const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRouter = require("./routes/productRouter");

// config
const app = express();
const PORT = process.env.PORT || 8800;
dotenv.config();

// mongoose connection
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("mongodb connected");
});

// middlewares
app.use(express.json());

// routes
// app.use("/", (req, res) => {
//   res.write("Hello peter");
// });
app.use("/api/products", productRouter);

// listen
app.listen(PORT, () => {
  console.log("server is up at port", PORT);
});
