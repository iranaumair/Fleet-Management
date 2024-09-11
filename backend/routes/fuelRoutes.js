// backend/routes/fuelRoutes.js
const express = require("express");
const router = express.Router();
const fuelController = require("../controllers/fuelController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, fuelController.addFuel);
router.get("/", authMiddleware, fuelController.getFuels);
router.get("/filter", authMiddleware, fuelController.filterFuels); // New filter route
router.put("/:id", authMiddleware, fuelController.updateFuel);
router.delete("/:id", authMiddleware, fuelController.deleteFuel);

module.exports = router;
