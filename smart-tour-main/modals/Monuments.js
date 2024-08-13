const mongoose = require("mongoose");

const monumentsModel = new mongoose.Schema(
  {
    image: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/monument-site-glyph-icon-vector-260nw-1610551678.jpg",
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    mapurl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Monuments = mongoose.model("Monuments", monumentsModel);
module.exports = Monuments;
