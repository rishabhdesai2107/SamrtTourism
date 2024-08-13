const express = require('express');
const router = express.Router();
const {
    createMonument,
  getMonuments,
  getMonumentById,
  updateMonument,
  deleteMonument,
} = require('../Controllers/MonumentsControllers');

// Create a new vehicle rental
router.post('/monuments', createMonument);

// Get all vehicle rentals
router.get('/monuments', getMonuments);

// Get single vehicle rental by ID
router.get('/monuments/:id', getMonumentById);

// Update vehicle rental by ID
router.put('/monuments/:id', updateMonument);

// Delete vehicle rental by ID
router.delete('/monuments/:id', deleteMonument);

module.exports = router;
