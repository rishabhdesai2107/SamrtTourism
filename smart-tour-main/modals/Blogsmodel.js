const mongoose = require("mongoose");

const blogModel = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Blogs = mongoose.model("Blogs", blogModel);
module.exports = Blogs;
