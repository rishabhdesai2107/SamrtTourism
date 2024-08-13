const express = require('express');
const router = express.Router();
const {
    createPlace,
    getPlaces,
    getPlaceById,
    updatePlace,
    deletePlace,
} = require('../Controllers/PlacesControllers');

// Create a new vehicle rental
router.post('/places', createPlace);

// Get all vehicle rentals
router.get('/places', getPlaces);

// Get single vehicle rental by ID
router.get('/places/:id', getPlaceById);

// Update vehicle rental by ID
router.put('/places/:id', updatePlace);

// Delete vehicle rental by ID
router.delete('/places/:id', deletePlace);

module.exports = router;
