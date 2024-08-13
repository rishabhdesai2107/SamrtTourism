const express = require('express');
const router = express.Router();
const {
    createBusiness,
    getBusinesses,
    getBusinessById,
    updateBusiness,
    deleteBusiness,
} = require('../Controllers/BusinessControllers');

// Create a new vehicle rental
router.post('/business', createBusiness);

// Get all vehicle rentals
router.get('/business', getBusinesses);

// Get single vehicle rental by ID
router.get('/business/:id', getBusinessById);

// Update vehicle rental by ID
router.put('/business/:id', updateBusiness);

// Delete vehicle rental by ID
router.delete('/business/:id', deleteBusiness);

module.exports = router;
