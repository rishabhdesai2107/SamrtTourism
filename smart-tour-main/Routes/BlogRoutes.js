const express= require("express");
const router=express.Router();

const {
    addBlogController,
    fetchBlogsController,
    updateBlogController,
    deleteBlogController,
} = require("../Controllers/BlogController");

// Route to add a new blog
router.post('/blogs', addBlogController);

// Route to fetch all blogs
router.get('/blogs', fetchBlogsController);

// Route to update a blog by ID
router.put('/blogs/:id', updateBlogController);

// Route to delete a blog by ID
router.delete('/blogs/:id', deleteBlogController);

module.exports=router