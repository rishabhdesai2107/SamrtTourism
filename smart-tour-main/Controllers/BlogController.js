const Blogs = require("../modals/Blogsmodel");

// Controller function to insert a new blog
const addBlogController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newBlog = new Blogs({ title, description });
    await newBlog.save();
    res.status(201).json({ message: "Blog added successfully", blog: newBlog });
  } catch (error) {
    res.status(500).json({ error: "Failed to add blog" });
  }
};

// Controller function to retrieve all blogs
const fetchBlogsController = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve blogs" });
  }
};

// Controller function to update a blog by ID
const updateBlogController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const blog = await Blogs.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog" });
  }
};

// Controller function to delete a blog by ID
const deleteBlogController = async (req, res) => {
  try {
    const blog = await Blogs.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully", blog });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
};

module.exports = {
  addBlogController,
  fetchBlogsController,
  updateBlogController,
  deleteBlogController,
};
