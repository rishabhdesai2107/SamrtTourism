const LodgePg = require('../modals/LodgePg');

// Create a new lodge/pg
const createLodgePg = async (req, res) => {
  try {
    const lodgePg = await LodgePg.create(req.body);
    res.status(201).json({ success: true, data: lodgePg });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all lodge/pg
const getLodgePgs = async (req, res) => {
  try {
    const lodgePgs = await LodgePg.find();
    res.status(200).json({ success: true, data: lodgePgs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single lodge/pg by ID
const getLodgePgById = async (req, res) => {
  try {
    const lodgePg = await LodgePg.findById(req.params.id);
    if (!lodgePg) {
      return res.status(404).json({ success: false, error: 'Lodge/Pg not found' });
    }
    res.status(200).json({ success: true, data: lodgePg });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update lodge/pg by ID
const updateLodgePg = async (req, res) => {
  try {
    const lodgePg = await LodgePg.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!lodgePg) {
      return res.status(404).json({ success: false, error: 'Lodge/Pg not found' });
    }
    res.status(200).json({ success: true, data: lodgePg });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete lodge/pg by ID
const deleteLodgePg = async (req, res) => {
  try {
    const lodgePg = await LodgePg.findByIdAndDelete(req.params.id);
    if (!lodgePg) {
      return res.status(404).json({ success: false, error: 'Lodge/Pg not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createLodgePg,
  getLodgePgs,
  getLodgePgById,
  updateLodgePg,
  deleteLodgePg,
};
