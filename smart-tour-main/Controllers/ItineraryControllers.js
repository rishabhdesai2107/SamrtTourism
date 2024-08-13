const Itinerary = require('../modals/Itinerary');

// Create a new itinerary
const createItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.create(req.body);
    res.status(201).json({ success: true, data: itinerary });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all itineraries
const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find();
    res.status(200).json({ success: true, data: itineraries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single itinerary by ID
const getItineraryById = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) {
      return res.status(404).json({ success: false, error: 'Itinerary not found' });
    }
    res.status(200).json({ success: true, data: itinerary });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update itinerary by ID
const updateItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!itinerary) {
      return res.status(404).json({ success: false, error: 'Itinerary not found' });
    }
    res.status(200).json({ success: true, data: itinerary });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete itinerary by ID
const deleteItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (!itinerary) {
      return res.status(404).json({ success: false, error: 'Itinerary not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createItinerary,
  getItineraries,
  getItineraryById,
  updateItinerary,
  deleteItinerary,
};
