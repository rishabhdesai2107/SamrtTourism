const mongoose = require("mongoose");

const reviewModel = new mongoose.Schema({
    id: { type: String, required: true },
    rating: { 
        type: Number, 
        required: true,
        min: 1, // Minimum rating allowed
        max: 5, // Maximum rating allowed
    },
    comment: { type: String, required: true },
    place:{ type: String }
}, {
    timestamps: true
});

const Reviews = mongoose.model("Reviews", reviewModel);
module.exports = Reviews;
