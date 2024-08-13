import React, { useState } from "react";
import axios from "axios";
import "./mystyle.css";
export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addBlog = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND + "/blogs/",
        formData
      );
      if (response) {
        alert("Blog added");
      } // assuming the response contains some feedback message
      setFormData({ title: "", description: "" }); // Clear the form after successful submission
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  return (
    <div className="container p-4">
      <div className="form-header">
        <h2>Add Blogs</h2>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter title here"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={addBlog}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
