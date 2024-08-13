const mongoose = require('mongoose');

const contactusSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  ownerFullName: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  businessCategory: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

const ContactUs = mongoose.model('ContactUs', contactusSchema);
module.exports = ContactUs;
