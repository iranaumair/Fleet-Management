// backend/routes/maintenanceRoutes.js
const express = require("express");
const router = express.Router();
const maintenanceController = require("../controllers/maintenanceController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, maintenanceController.addMaintenance);
router.get("/", authMiddleware, maintenanceController.getMaintenances);
router.get("/filter", authMiddleware, maintenanceController.filterMaintenances); // New filter route
router.put("/:id", authMiddleware, maintenanceController.updateMaintenance);
router.delete("/:id", authMiddleware, maintenanceController.deleteMaintenance);

module.exports = router;
