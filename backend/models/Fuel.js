const mongoose = require("mongoose");

const FuelSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  vehicleType: { type: String },
  driver: { type: String },
  registration: { type: String },
  fuelAmount: { type: Number },
  cost: { type: Number },
  odometerReading: { type: Number },
});

module.exports = mongoose.model("Fuel", FuelSchema);
