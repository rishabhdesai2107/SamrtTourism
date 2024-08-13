const express = require('express');
const router = express.Router();
const {
    createContactUs,
    getContactUsEntries,
   
    deleteContactUs,
} = require('../Controllers/ContactUsControllers');

// Create a new vehicle rental
router.post('/contactus', createContactUs);

// Get all vehicle rentals
router.get('/contactus', getContactUsEntries);



// Delete vehicle rental by ID
router.delete('/contactus/:id', deleteContactUs);

module.exports = router;
