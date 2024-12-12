const mongoose = require("mongoose");
const Product = require("./models/product");
require("dotenv").config();

const products = [
  // Apple
  {
    name: "iPhone 15 Pro",
    price: 1199,
    description: "Pro features in a compact design.",
    category: "Phone",
    brand: "Apple",
    releaseYear: 2024,
  },
  {
    name: "iPhone 15",
    price: 899,
    description: "The next generation of iPhone.",
    category: "Phone",
    brand: "Apple",
    releaseYear: 2024,
  },
  {
    name: "iPad Pro 12.9 (2024)",
    price: 1099,
    description: "Powerful tablet with M3 chip.",
    category: "Tablet",
    brand: "Apple",
    releaseYear: 2024,
  },
  {
    name: "iPad Air 2024",
    price: 699,
    description: "Lightweight and powerful tablet.",
    category: "Tablet",
    brand: "Apple",
    releaseYear: 2024,
  },
  {
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    description: "Active noise cancellation and transparency mode.",
    category: "Headphone",
    brand: "Apple",
    releaseYear: 2024,
  },

  // Samsung
  {
    name: "Galaxy S23 Ultra",
    price: 1199,
    description: "Ultra performance with S Pen.",
    category: "Phone",
    brand: "Samsung",
    releaseYear: 2024,
  },
  {
    name: "Galaxy A54 5G",
    price: 449,
    description: "Affordable phone with 5G connectivity.",
    category: "Phone",
    brand: "Samsung",
    releaseYear: 2024,
  },
  {
    name: "Galaxy Tab S9 Ultra",
    price: 1299,
    description: "Large screen for productivity.",
    category: "Tablet",
    brand: "Samsung",
    releaseYear: 2024,
  },
  {
    name: "Galaxy Tab A8",
    price: 349,
    description: "Affordable tablet for everyday use.",
    category: "Tablet",
    brand: "Samsung",
    releaseYear: 2024,
  },
  {
    name: "Galaxy Buds2 Pro",
    price: 229,
    description: "Immersive sound and ANC.",
    category: "Headphone",
    brand: "Samsung",
    releaseYear: 2024,
  },

  // Huawei
  {
    name: "Huawei Mate 60 Pro",
    price: 999,
    description: "Flagship phone with advanced cameras.",
    category: "Phone",
    brand: "Huawei",
    releaseYear: 2024,
  },
  {
    name: "Huawei Nova 11i",
    price: 399,
    description: "Budget-friendly with excellent design.",
    category: "Phone",
    brand: "Huawei",
    releaseYear: 2024,
  },
  {
    name: "Huawei MatePad Pro 2024",
    price: 899,
    description: "Professional tablet with OLED display.",
    category: "Tablet",
    brand: "Huawei",
    releaseYear: 2024,
  },
  {
    name: "Huawei MediaPad T10",
    price: 199,
    description: "Entry-level tablet for light use.",
    category: "Tablet",
    brand: "Huawei",
    releaseYear: 2024,
  },
  {
    name: "Huawei FreeBuds Pro 2",
    price: 179,
    description: "Clear sound with ANC.",
    category: "Headphone",
    brand: "Huawei",
    releaseYear: 2024,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Delete any existing products in the database
    await Product.deleteMany();
    console.log("Existing products deleted.");

    // Seed the products into the database
    await Product.insertMany(products);
    console.log("Products seeded successfully.");

    // Close the database connection after seeding
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

// Run the seeding function
seedDatabase();
