const express = require('express');
const router = express.Router();
const {
  createVehicleRental,
  getVehicleRentals,
  getVehicleRentalById,
  updateVehicleRental,
  deleteVehicleRental,
} = require('../Controllers/VehicleRentalControllers');

// Create a new vehicle rental
router.post('/vehicle-rentals', createVehicleRental);

// Get all vehicle rentals
router.get('/vehicle-rentals', getVehicleRentals);

// Get single vehicle rental by ID
router.get('/vehicle-rentals/:id', getVehicleRentalById);

// Update vehicle rental by ID
router.put('/vehicle-rentals/:id', updateVehicleRental);

// Delete vehicle rental by ID
router.delete('/vehicle-rentals/:id', deleteVehicleRental);

module.exports = router;
