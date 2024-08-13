const mongoose = require("mongoose");

const placeModel = new mongoose.Schema(
  {
    image: {
      type: String,
      default:
        "https://cdn2.vectorstock.com/i/1000x1000/90/86/pin-map-place-location-icon-unique-vector-31469086.jpg"
    },
    id:{ type: String },
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    knownas: [{ type: String, required: true }],
    mapurl: { type: String, required: true },
    location: { type: String, required: true },
    tab: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Places = mongoose.model("Places", placeModel);
module.exports = Places;
