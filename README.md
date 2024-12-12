# E-Commerce Backend Project

This project is designed to help you build a backend for an e-commerce website using **Express.js** and **MongoDB**. The backend provides essential e-commerce functionality such as user management, product management, and cart management.

### Technologies Used:

- **Node.js**
- **Express.js**
- **MongoDB** (Local or Atlas)
- **JWT** (for user authentication)

---

## Table of Contents

1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Running the Application](#running-the-application)
4. [Environment Variables](#environment-variables)
5. [MongoDB Setup](#mongodb-setup)
6. [Database Seeding](#database-seeding)
7. [Common Issues and Solutions](#common-issues-and-solutions)

---

## Installation

### 1. Clone the repository:

Clone the repository to your local machine using Git:

```bash
git clone <your-repo-url>
```

### 2. Install dependencies:

Navigate to the project directory and install the necessary dependencies using npm:

```bash
cd e-commerce-backend
npm install
```

---

## Project Structure

The project has the following structure:

```
e-commerce-backend/
├── models/
│   └── Product.js        # Product model definition
├── seedProducts.js       # Script to seed the database with products
├── server.js                # Main Express.js server file
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

---

## Running the Application

### 1. Set up your environment variables

Create a `.env` file in the root of the project with the following content:

```plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority
PORT=5000
```

- Replace `<username>` and `<password>` with your actual MongoDB Atlas credentials if you're using Atlas.
- If you're using a local MongoDB instance, update the `MONGO_URI` as:
  ```plaintext
  MONGO_URI=mongodb://localhost:27017/ecommerce
  ```

### 2. Start the server

Once the environment variables are set, you can run the application by executing:

```bash
node server.js
```

The server will start, and you should see:

```
Server running on port 5000
```

---

## MongoDB Setup

To connect to MongoDB, you can use either a local MongoDB instance or MongoDB Atlas (cloud database).

### Connecting to MongoDB locally:

Make sure MongoDB is installed and running locally. You can install it using:

- [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)

Then, connect to your local instance using:

```plaintext
MONGO_URI=mongodb://localhost:27017/ecommerce
```

### Connecting to MongoDB Atlas:

1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster and get the connection string.
3. Replace the placeholders `<username>` and `<password>` in the `.env` file with your Atlas credentials.

---

## Database Seeding

To populate the database with initial product data, use the `seedProducts.js` script. This script deletes any existing products and seeds the database with new data.

### Running the seeding script:

```bash
node seedProducts.js
```

This will:

1. Delete existing products.
2. Insert predefined product data (smartphones, tablets, headphones) from Apple, Samsung, and Huawei.

---

## Common Issues and Solutions

### 1. **Error: Cannot find module './models/Product'**

**Issue**: The `Product.js` model is not found.

**Solution**: Ensure that the `Product.js` file exists inside the `models` directory. If not, create the file and define the `Product` model.

Example:

```javascript
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
```

### 2. **MongoDB connection issues**

You may encounter connection errors, especially with MongoDB URI.

**Solution**: Ensure the MongoDB URI is correct and the database server is running.

- If you're using MongoDB Atlas, ensure that your IP address is added to the whitelist in the Atlas dashboard.
- If you're using a local MongoDB instance, ensure MongoDB is running on your local machine.

If the error persists, refer to the error message and verify that the credentials in `.env` are correct.

### 3. **Deprecation Warnings (useNewUrlParser and useUnifiedTopology)**

**Issue**: The warnings indicate that options like `useNewUrlParser` and `useUnifiedTopology` are deprecated in MongoDB Node.js driver version 4.0.0 and above.

**Solution**: Remove the deprecated options from your code, as they're no longer needed.

Update the MongoDB connection code:

```javascript
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));
```

---

## Conclusion

This backend project sets up a simple e-commerce API with user authentication, product management, and a cart system using **MongoDB** and **Express.js**. You can extend the functionality further by implementing features like admin roles, product filtering, and adding authentication for routes.

For any further issues or enhancements, feel free to ask for help!

---

**End of README**
