const Monuments = require('../modals/Monuments');

// Create a new monument
const createMonument = async (req, res) => {
  try {
    const monument = await Monuments.create(req.body);
    res.status(201).json({ success: true, data: monument });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all monuments
const getMonuments = async (req, res) => {
  try {
    const monuments = await Monuments.find();
    res.status(200).json({ success: true, data: monuments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single monument by ID
const getMonumentById = async (req, res) => {
  try {
    const monument = await Monuments.findById(req.params.id);
    if (!monument) {
      return res.status(404).json({ success: false, error: 'Monument not found' });
    }
    res.status(200).json({ success: true, data: monument });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update monument by ID
const updateMonument = async (req, res) => {
  try {
    const monument = await Monuments.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!monument) {
      return res.status(404).json({ success: false, error: 'Monument not found' });
    }
    res.status(200).json({ success: true, data: monument });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete monument by ID
const deleteMonument = async (req, res) => {
  try {
    const monument = await Monuments.findByIdAndDelete(req.params.id);
    if (!monument) {
      return res.status(404).json({ success: false, error: 'Monument not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createMonument,
  getMonuments,
  getMonumentById,
  updateMonument,
  deleteMonument,
};
