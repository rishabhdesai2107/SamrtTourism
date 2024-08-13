const mongoose = require("mongoose");

const itineraryModel = new mongoose.Schema(
  {
    day: { type: Number, required: true },
    heading: { type: String, required: true },
    activities: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const Itinerary = mongoose.model("Itinerary", itineraryModel);
module.exports = Itinerary;
