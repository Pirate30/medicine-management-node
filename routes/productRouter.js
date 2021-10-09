const router = require("express").Router();
const Product = require("../models/productModel");

// inserting the medicines
router.post("/seed", async (req, res) => {
  console.log(req.body);
  const newProduct = await new Product(req.body);
  if (newProduct) {
    try {
      newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.json("something went wrong product not created");
  }
});

// getting the all medicine lists
router.get("/seed", async (req, res) => {
  const products = await Product.find({});
  if (products) {
    try {
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.json("something went wrong can't get product list");
  }
});

// getting particukar medicine details by id
router.get("/seed/:id", async (req, res) => {
  //console.log(req.params.id);
  const requestedProduct = await Product.findById(req.params.id);
  if (requestedProduct) {
    try {
      res.status(200).send(requestedProduct);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.json("something went wrong... product not exists");
  }
});

// updating the medicine
router.post("/seed/:id", async (req, res) => {
  try {
    // check if the product corresponding to id exists trying to updating that product with the product in body
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (updatedProduct) {
      // save in the mongodb
      updatedProduct.save();
      const savedProduct = await Product.findById(req.params.id);
      // return saved product
      res.status(201).json(savedProduct);
    } else {
      res.json("cannot be updated");
    }
  } catch (error) {
    console.log(error);
  }
});

// deleting the medicine
router.post("/seed/delete/:id", async (req, res) => {
  //   console.log("delete request came");
  // check if the requested id exists & delete it
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product deleted successfully!!");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
