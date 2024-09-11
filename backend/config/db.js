const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Remove deprecated options
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
