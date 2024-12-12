const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cartRoutes = require("./routes/cartRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");




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
console.log("User Routes Loaded"); // Debugging
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);


// try {
//   console.log("Product Routes Loaded"); // Debugging
// } catch (error) {
//   console.error("Error loading product routes:", error.message);
// }

// try {
//   console.log("Cart Routes Loaded"); // Debugging
// } catch (error) {
//   console.error("Error loading cart routes:", error.message);
// }

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
