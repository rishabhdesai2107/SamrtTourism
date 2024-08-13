const ContactUs = require('../modals/ContactUs');

// Create a new contact us entry
const createContactUs = async (req, res) => {
  try {
    const contactUsEntry = await ContactUs.create(req.body);
    res.status(201).json({ success: true, data: contactUsEntry });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all contact us entries
const getContactUsEntries = async (req, res) => {
  try {
    const contactUsEntries = await ContactUs.find();
    res.status(200).json({ success: true, data: contactUsEntries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};





// Delete contact us entry by ID
const deleteContactUs = async (req, res) => {
  try {
    const contactUsEntry = await ContactUs.findByIdAndDelete(req.params.id);
    if (!contactUsEntry) {
      return res.status(404).json({ success: false, error: 'Contact us entry not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createContactUs,
  getContactUsEntries,
  deleteContactUs,
};
