import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import placesData from "places.json";
import axios from "axios";
import "./places.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import AOS from "aos";
import "aos/dist/aos.css";

function Places() {
  AOS.init();

  let { name } = useParams();

  let [data, setData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [placesData, setPlaces] = useState([]);
  const [value, setValue] = React.useState(0);

  const [newReview, setNewReview] = useState({ name:name,rating: 0, comment: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}/places/places`
        );
        const placesData = response?.data?.data;
        
        console.log(placesData);
  
        // Filter places based on your condition (e.g., name)
        const filteredPlace = placesData.filter((item) => item.name === name);
  
        console.log(filteredPlace);
  
        // Check if a place is found before setting data
        if (filteredPlace) {
          setData(filteredPlace[0]);
          fetchReviews(filteredPlace[0]._id);
        } else {
          console.warn("No place found with the specified name.");
        }
  
        return response.data;
      } catch (error) {
        console.error("Error fetching places:", error);
        return null; // Handle the error as per your application's requirement
      }
    };
  
    fetchData();
  }, [name]); // Include name as a dependency if it is used in the filtering condition
  

 
  const fetchReviews = async (id) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND + "/reviews/reviews/" + id
      );
      // console.log(response.data)
      setReviews(response.data);
      // console.log("set kiya hua", blogData);
      return response;
    } catch (error) {
      console.error("Error fetching records:", error);
      return null; // Handle the error as per your application's requirement
    }
  };

  const handleRatingChange = (e) => {
    setNewReview({ ...newReview, rating: parseInt(e.target.value) });
  };

  const handleCommentChange = (e) => {
    setNewReview({ ...newReview,comment: e.target.value });
  };

  const handleAddReview = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND + "/reviews/reviews",
        { ...newReview, id: data?._id.toString()}
      );
      if (response) {
        alert("Review added");
        setReviews([...reviews, newReview]);
        setNewReview({name:name,rating: 0, comment: "" });
        setValue(0);
      } // assuming the response contains some feedback message
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  return (
    <>
      {data ? (
        <>
          {/* Page Content */}
          <div
            className="container mt-4 mb-4"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              {data?.name}
              <small> {data?.type}</small>
            </h1>

            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">{data?.type}</li>
            </ol>

            {/* Portfolio Item Row */}
            <div className="row">
              <div className="col-md-8">
                <img
                  className="img-fluid place-img"
                  src={`${data?.image}`}
                  alt=""
                />

                {/* Display all reviews */}
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <h3>All Reviews</h3>

                    <div className="row text-center d-flex align-items-stretch">
                      {reviews?.map((review, index) => (
                        <div
                          key={index}
                          className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch"
                          data-aos="fade-in"
                          data-aos-offset="200"
                          data-aos-delay="10"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-out"
                        >
                          <div className="card testimonial-card mt-4">
                            <div
                              className="card-up"
                              style={{ background: "#9d789b" }}
                            ></div>
                            <div className="avatar mx-auto bg-white">
                              <img
                                src="https://img.freepik.com/free-vector/giant-check-list_23-2148085792.jpg?w=740&t=st=1708454311~exp=1708454911~hmac=98a5c361ddbd1edfd960548a21a859c1d067c99153fb829b350fb8f209ee9c45"
                                className="rounded-circle img-fluid"
                                alt="Avatar"
                              />
                            </div>
                            <div className="card-body">
                              <h4 className="mb-4">Anonymous</h4>
                              <b className="mb-4">
                                Rating:{" "}
                                <Box
                                  sx={{
                                    "& > legend": { mt: 2 },
                                  }}
                                >
                                  <Rating
                                    name="read-only"
                                    value={review.rating}
                                    readOnly
                                  />
                                </Box>
                              </b>
                              <hr />
                              <p className="dark-grey-text mt-4">
                                {review.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row rating-sec">
                  <div className="col-md-12">
                    <form>
                      <div className="form-group ">
                        <label htmlFor="rating">Rating:</label>
                        {/* <select
                          id="rating"
                          className="form-control"
                          value={newReview.rating}
                          onChange={handleRatingChange}
                        >
                          <option value={0}>Select Rating</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select> */}

                        <Box
                          sx={{
                            "& > legend": { mt: 2 },
                          }}
                        >
                          {/* <Typography component="legend">Controlled</Typography> */}
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setNewReview({ name:name,rating: newValue,comment:""});
                              setValue(newValue);
                            }}
                          />
                        </Box>
                      </div>
                      <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                          id="comment"
                          className="form-control"
                          rows="3"
                          value={newReview.comment}
                          onChange={handleCommentChange}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleAddReview}
                      >
                        Add Review
                      </button>
                    </form>
                  </div>
                </div>
                <h3 className="my-3">Description</h3>
                <p>{data?.description}</p>
                <h3 className="my-3">Also Known as</h3>
                {/* <ul>
                  {data?.knownas?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul> */}
                <b>{data?.knownas}</b>

                <h2 className="mt-4 w-100">Direction</h2>
                <iframe
                 data-aos="fade-left"
                 data-aos-offset="150"
                 data-aos-delay="20"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                  src={data?.mapurl}
                  className="w-100"
                  height="450"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </>
      ) : (
        <>
          <h1 className="m-4 p-4 text-center">Page Not Found</h1>
        </>
      )}
    </>
  );
}

export default Places;
