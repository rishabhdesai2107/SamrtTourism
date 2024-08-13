const Places = require('../modals/PlacesModel');

// Create a new place
const createPlace = async (req, res) => {
  try {
    const place = await Places.create(req.body);
    res.status(201).json({ success: true, data: place });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all places
const getPlaces = async (req, res) => {
  try {
    const places = await Places.find();
    res.status(200).json({ success: true, data: places });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single place by ID
const getPlaceById = async (req, res) => {
  try {
    const place = await Places.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ success: false, error: 'Place not found' });
    }
    res.status(200).json({ success: true, data: place });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update place by ID
const updatePlace = async (req, res) => {
  try {
    const place = await Places.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!place) {
      return res.status(404).json({ success: false, error: 'Place not found' });
    }
    res.status(200).json({ success: true, data: place });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete place by ID
const deletePlace = async (req, res) => {
  try {
    const place = await Places.findByIdAndDelete(req.params.id);
    if (!place) {
      return res.status(404).json({ success: false, error: 'Place not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createPlace,
  getPlaces,
  getPlaceById,
  updatePlace,
  deletePlace,
};
