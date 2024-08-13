const express = require('express');
const router = express.Router();
const {
    createItinerary,
    getItineraries,
    getItineraryById,
    updateItinerary,
    deleteItinerary,
} = require('../Controllers/ItineraryControllers');

// Create a new vehicle rental
router.post('/itinerary', createItinerary);

// Get all vehicle rentals
router.get('/itinerary', getItineraries);

// Get single vehicle rental by ID
router.get('/itinerary/:id', getItineraryById);

// Update vehicle rental by ID
router.put('/itinerary/:id', updateItinerary);

// Delete vehicle rental by ID
router.delete('/itinerary/:id', deleteItinerary);

module.exports = router;
