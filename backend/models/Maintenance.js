const mongoose = require("mongoose");

const MaintenanceSchema = new mongoose.Schema({
  srNo: { type: Number, unique: true }, // Ensure srNo is a number and unique
  date: { type: Date, required: true },
  vehicleType: { type: String },
  registration: { type: String },
  driverName: { type: String },
  workshop: { type: String },
  detailOfJobDescription: { type: String },
  currentReading: { type: Number },
  nextOilChangeReading: { type: Number },
  paidAmount: { type: Number },
  remarks: { type: String },
});

module.exports = mongoose.model("Maintenance", MaintenanceSchema);
