// backend/controllers/maintenanceController.js

const Maintenance = require("../models/Maintenance");
const Counter = require("../models/Counter");
// add
exports.addMaintenance = async (req, res) => {
  try {
    // Increment and get the new sequence value for srNo
    const counter = await Counter.findByIdAndUpdate(
      { _id: "srNo" },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    );

    // Ensure srNo is properly set
    if (!counter || counter.sequence_value === null) {
      return res.status(500).json({ error: "Failed to generate unique srNo" });
    }

    const newMaintenance = new Maintenance({
      ...req.body,
      srNo: counter.sequence_value, // Set the unique srNo
    });

    await newMaintenance.save();
    res.status(201).json(newMaintenance);
  } catch (err) {
    console.error("Error adding maintenance record:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get all maintenance records
exports.getMaintenances = async (req, res) => {
  try {
    const maintenances = await Maintenance.find();
    res.json(maintenances);
  } catch (err) {
    console.error("Error fetching maintenances:", err);
    res.status(500).json({ error: err.message });
  }
};

// Filter maintenance records based on vehicle and date range
exports.filterMaintenances = async (req, res) => {
  try {
    const { vehicles, startDate, endDate } = req.query;
    const filters = {};
    if (vehicles) {
      filters.registration = { $in: vehicles.split(",") };
    }
    if (startDate && endDate) {
      filters.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    const maintenances = await Maintenance.find(filters);
    res.json(maintenances);
  } catch (err) {
    console.error("Error filtering maintenance records:", err);
    res.status(500).json({ error: err.message });
  }
};

// Update maintenance record
exports.updateMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!maintenance)
      return res.status(404).json({ message: "Maintenance record not found" });
    res.json(maintenance);
  } catch (err) {
    console.error("Error updating maintenance record:", err);
    res.status(500).json({ error: err.message });
  }
};

// Delete maintenance record
exports.deleteMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(req.params.id);
    if (!maintenance)
      return res.status(404).json({ message: "Maintenance record not found" });
    res.json({ message: "Maintenance record deleted successfully" });
  } catch (err) {
    console.error("Error deleting maintenance record:", err);
    res.status(500).json({ error: err.message });
  }
};
