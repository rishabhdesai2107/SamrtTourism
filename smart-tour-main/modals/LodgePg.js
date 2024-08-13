const mongoose = require("mongoose");

const lodgepgModel = new mongoose.Schema(
  {
    image: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/building-vector-icon-260nw-659430292.jpg",
    },
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const LodgePg = mongoose.model("LodgePg", lodgepgModel);
module.exports = LodgePg;
