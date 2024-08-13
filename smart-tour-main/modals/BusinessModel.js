const mongoose = require("mongoose");

const businessModel = new mongoose.Schema(
  {
    img: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/shopping-store-building-icon-vector_620118-14.jpg",
    },
    name: { type: String, required: true },
    category: { type: String, required: true },
    Taluka: { type: String, required: true },
    description: { type: String, required: true },

    ContactNumber: { type: String, required: true },
    Speciality: { type: String, required: true },
    Timing: { type: String, required: true },
    mapurl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Business = mongoose.model("Business", businessModel);
module.exports = Business;
