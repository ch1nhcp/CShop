import express from "express";
import products from "./products";

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running!");
});

app.get("/api", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const products = products.find((p) => p._id === req.params.id);
  res.json(products);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
