// backend/routes/driverRoutes.js
const express = require("express");
const router = express.Router();
const {
  addDriver,
  getDrivers,
  getDriverById,
  updateDriver,
  deleteDriver,
} = require("../controllers/driverController");
const authMiddleware = require("../middleware/authMiddleware");

// Apply authMiddleware to routes that require authentication
router.post("/", authMiddleware, addDriver);
router.get("/", authMiddleware, getDrivers);
router.get("/:id", authMiddleware, getDriverById);
router.put("/:id", authMiddleware, updateDriver);
router.delete("/:id", authMiddleware, deleteDriver);

module.exports = router;
