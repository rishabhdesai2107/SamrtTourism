const mongoose = require("mongoose");

const vehicalrentalModel = new mongoose.Schema(
  {
    image: {
      type: String,
      required:true
    },
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    contactNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const VehicleRental = mongoose.model("VehicleRental", vehicalrentalModel);
module.exports = VehicleRental;
