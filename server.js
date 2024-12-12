const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));

// Routes
const userRoutes = require("./routes/userRoutes");
console.log("User Routes Loaded"); // Debugging
app.use("/api/users", userRoutes);

try {
  const productRoutes = require("./routes/productRoutes");
  console.log("Product Routes Loaded"); // Debugging
  app.use("/api/products", productRoutes);
} catch (error) {
  console.error("Error loading product routes:", error.message);
}

try {
  const cartRoutes = require("./routes/cartRoutes");
  console.log("Cart Routes Loaded"); // Debugging
  app.use("/api/cart", cartRoutes);
} catch (error) {
  console.error("Error loading cart routes:", error.message);
}

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
