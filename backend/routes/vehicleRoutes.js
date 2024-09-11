// backend/routes/vehicleRoutes.js
const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, vehicleController.addVehicle);
router.get("/", authMiddleware, vehicleController.getVehicles);
router.put("/:id", authMiddleware, vehicleController.updateVehicle); // Ensure this route exists
router.delete("/:id", authMiddleware, vehicleController.deleteVehicle);

module.exports = router;
