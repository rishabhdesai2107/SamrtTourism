
const Business = require('../modals/BusinessModel');

// Create a new business
const createBusiness = async (req, res) => {
  try {
    const business = await Business.create(req.body);
    res.status(201).json({ success: true, data: business });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all businesses
const getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json({ success: true, data: businesses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single business by ID
const getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ success: false, error: 'Business not found' });
    }
    res.status(200).json({ success: true, data: business });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update business by ID
const updateBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!business) {
      return res.status(404).json({ success: false, error: 'Business not found' });
    }
    res.status(200).json({ success: true, data: business });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete business by ID
const deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    if (!business) {
      return res.status(404).json({ success: false, error: 'Business not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createBusiness,
  getBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
}
