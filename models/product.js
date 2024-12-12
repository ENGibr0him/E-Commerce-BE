const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: {
    type: String,
    enum: ["Tablet", "Phone", "Headphone"],
    required: true,
  },
  brand: { type: String, enum: ["Apple", "Samsung", "Huawei"], required: true },
  releaseYear: { type: Number, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
