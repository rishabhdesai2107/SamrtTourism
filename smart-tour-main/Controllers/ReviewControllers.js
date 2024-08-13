const Reviews = require('../modals/ReviewModel'); 
const Places = require('../modals/PlacesModel')
// Assuming your model is defined in this file

// Controller function to insert a new review
const addreviewController = async (req, res) => {
    try {
        const { id, name,rating, comment } = req.body;
        const place = await Places.findById(id);

        // const newReview = new Reviews({ id: place._id, rating, comment, place:place.name });
        const newReview = new Reviews({ id: id, rating, comment, place:place.name });
        await newReview.save();
        res.status(201).json({ message: 'Review added successfully',newReview  });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to add review' });
    }
};

// Controller function to retrieve all reviews
const fetchreviewsController = async (req, res) => {
    try {
        
        const reviews = await Reviews.find({});

        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve reviews' });
    }
};
const fetchReviewsByIdController = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the id is passed as a URL parameter
        const reviews = await Reviews.find({ id: id });
        res.json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve reviews' });
    }
};

// Controller function to delete a review
const deleteReviewController = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the id is passed as a URL parameter
        const deletedReview = await Reviews.findByIdAndDelete(id);
        if (!deletedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to delete review' });
    }
};
module.exports = { addreviewController, fetchreviewsController , deleteReviewController,fetchReviewsByIdController};
