// backend/controllers/fuelController.js
const Fuel = require("../models/Fuel");

// Add new fuel record
exports.addFuel = async (req, res) => {
  try {
    const newFuel = new Fuel(req.body);
    await newFuel.save();
    res.status(201).json(newFuel);
  } catch (err) {
    console.error("Error adding fuel record:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get all fuel records
exports.getFuels = async (req, res) => {
  try {
    const fuels = await Fuel.find();
    res.json(fuels);
  } catch (err) {
    console.error("Error fetching fuel records:", err);
    res.status(500).json({ error: err.message });
  }
};

// Filter fuel records based on vehicle and date range
exports.filterFuels = async (req, res) => {
  try {
    const { vehicles, startDate, endDate } = req.query;
    const filters = {};
    if (vehicles) {
      filters.registration = { $in: vehicles.split(",") };
    }
    if (startDate && endDate) {
      filters.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    const fuels = await Fuel.find(filters);
    res.json(fuels);
  } catch (err) {
    console.error("Error filtering fuel records:", err);
    res.status(500).json({ error: err.message });
  }
};

// Update fuel record
exports.updateFuel = async (req, res) => {
  try {
    const fuel = await Fuel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!fuel)
      return res.status(404).json({ message: "Fuel record not found" });
    res.json(fuel);
  } catch (err) {
    console.error("Error updating fuel record:", err);
    res.status(500).json({ error: err.message });
  }
};

// Delete fuel record
exports.deleteFuel = async (req, res) => {
  try {
    const fuel = await Fuel.findByIdAndDelete(req.params.id);
    if (!fuel)
      return res.status(404).json({ message: "Fuel record not found" });
    res.json({ message: "Fuel record deleted successfully" });
  } catch (err) {
    console.error("Error deleting fuel record:", err);
    res.status(500).json({ error: err.message });
  }
};
