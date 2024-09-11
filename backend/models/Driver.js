// backend/models/Driver.js
const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  licenseNumber: { type: String, required: true, unique: true },
  contactInfo: { type: String },
  assignedVehicleId: { type: String },
  notes: { type: String },
});

module.exports = mongoose.model("Driver", DriverSchema);
