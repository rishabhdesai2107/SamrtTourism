const VehicleRental = require('../modals/VehicleRental');

// Create a new vehicle rental
const createVehicleRental = async (req, res) => {
  try {
    const vehicleRental = await VehicleRental.create(req.body);
    res.status(201).json({ success: true, data: vehicleRental });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all vehicle rentals
const getVehicleRentals = async (req, res) => {
  try {
    const vehicleRentals = await VehicleRental.find();
    res.status(200).json({ success: true, data: vehicleRentals });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single vehicle rental by ID
const getVehicleRentalById = async (req, res) => {
  try {
    const vehicleRental = await VehicleRental.findById(req.params.id);
    if (!vehicleRental) {
      return res.status(404).json({ success: false, error: 'Vehicle rental not found' });
    }
    res.status(200).json({ success: true, data: vehicleRental });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update vehicle rental by ID
const updateVehicleRental = async (req, res) => {
  try {
    const vehicleRental = await VehicleRental.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!vehicleRental) {
      return res.status(404).json({ success: false, error: 'Vehicle rental not found' });
    }
    res.status(200).json({ success: true, data: vehicleRental });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete vehicle rental by ID
const deleteVehicleRental = async (req, res) => {
  try {
    const vehicleRental = await VehicleRental.findByIdAndDelete(req.params.id);
    if (!vehicleRental) {
      return res.status(404).json({ success: false, error: 'Vehicle rental not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createVehicleRental,
  getVehicleRentals,
  getVehicleRentalById,
  updateVehicleRental,
  deleteVehicleRental,
};
