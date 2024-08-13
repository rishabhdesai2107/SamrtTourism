const express = require('express');
const router = express.Router();
const {
    createLodgePg,
    getLodgePgs,
    getLodgePgById,
    updateLodgePg,
    deleteLodgePg,
} = require('../Controllers/LodgePgControllers');

// Create a new vehicle rental
router.post('/lodgepg', createLodgePg);

// Get all vehicle rentals
router.get('/lodgepg', getLodgePgs);

// Get single vehicle rental by ID
router.get('/lodgepg/:id', getLodgePgById);

// Update vehicle rental by ID
router.put('/lodgepg/:id', updateLodgePg);

// Delete vehicle rental by ID
router.delete('/lodgepg/:id', deleteLodgePg);

module.exports = router;
