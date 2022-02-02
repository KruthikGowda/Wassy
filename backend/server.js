const express = require("express");
const products = require("./data/products");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running..........");
});

app.get("/v1/products", (req, res) => {
  res.json(products);
});

app.get("/v1/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(
  port,
  console.log("Server is running on port: http://localhost:" + port)
);
