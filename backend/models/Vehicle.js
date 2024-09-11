// backend/models/Vehicle.js
const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  registration: { type: String, required: true, unique: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  chassisNo: { type: String, required: true },
  purchaseDate: { type: Date },
  status: { type: String },
  currentReading: { type: Number },
  assignedDriver: { type: String },
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
