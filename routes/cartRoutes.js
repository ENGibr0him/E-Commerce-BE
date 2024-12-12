const express = require("express");
const Cart = require("../models/cart");
const router = express.Router();

// Middleware to extract userId from the request
router.use((req, res, next) => {
  req.userId = "someUserId";
  next();
});

// Add product to cart
router.post("/cart", async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.userId });
    if (cart) {
      cart.products.push({
        productId: req.body.productId,
        quantity: req.body.quantity,
      });
      await cart.save();
    } else {
      cart = await Cart.create({
        userId: req.userId,
        products: [
          { productId: req.body.productId, quantity: req.body.quantity },
        ],
      });
    }
    res.status(200).send("Product added to cart");
  } catch (error) {
    console.error("Error adding product to cart:", error.message);
    res.status(500).send("Internal server error");
  }
});

// View cart
router.get("/cart", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.userId }).populate(
      "products.productId"
    );
    if (!cart) {
      return res.status(404).send("Cart not found");
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error retrieving cart:", error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
