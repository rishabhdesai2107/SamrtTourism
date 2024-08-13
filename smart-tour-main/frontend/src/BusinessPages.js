import React, { useState, useEffect } from "react";
import "./business.css";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashLink } from "react-router-hash-link";

export default function BusinessPages() {
  AOS.init();
  const [card, setcard] = useState(0);
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/business/business`
      );
      // console.log("Response data:", response.data.data);
      // Log the data received from the API
      setBusinesses(response.data.data);
    } catch (error) {
      console.error("Error fetching businesses:", error);
      // Handle the error as per your application's requirement
    }
  };

  return (
    <>
      <section className="businesspage-cont">
        <div className="business-cont">
          <div className="business-bg">
            {/* <img
              src="https://ratnagiritourism.in/wp-content/uploads/2022/06/Business-Background-Image-2.jpg"
              alt="bg-mg"
            /> */}
            <div className="business-img"></div>
            <div
              className="bg-title"
              data-aos="fade-up"
              data-aos-offset=""
              data-aos-delay="10"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <h1>Business</h1>
            </div>
          </div>

          <div
            className="pre-title"
            data-aos="fade-up"
            data-aos-offset=""
            data-aos-delay="10"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <h2>Search your desired business here</h2>
          </div>
          <div className="business-main-cont">
            <div className="search-business-sec">
              <div className="business-add-btn">
                {/* <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={()=>{window.location.href("/#contactus")}}
                  //  type="button"
                  //  class="btn btn-primary"
                 
                >
                  Add Your Business
                </button> */}

                <HashLink
                  class="btn btn-outline-primary"
                  role="button"
                  to="/#contactus"
                >
                  {" "}
                  Add Your Business
                </HashLink>

                {/* <a
                  class="btn btn-outline-primary"
                  href="/#contactus"
                  role="button"
                >
                  Add Your Business
                </a> */}
              </div>
            </div>
            <div class="container">
              {businesses.map((business, index) => (
                <div class="custom-card">
                  <div class="img-box">
                    <img src={business.img} />
                  </div>
                  <div class="custom-content">
                    <h2>{business.name}</h2>
                    <p>Category: {business.category}</p>
                    <p>Taluka: {business.Taluka}</p>

                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      // data-bs-target="#staticBackdrop"
                      data-bs-target={`#staticBackdrop-${card}`}
                      key={index}
                      onClick={() => {
                        setcard(index);
                        console.log("card", card);
                      }}
                    >
                      See More
                    </button>

                    {/* <!-- Modal --> */}
                    <div
                      class="modal fade businesscadedisplay"
                      id={`staticBackdrop-${card}`}
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content container">
                          <div class="modal-header d-flex justify-content-end">
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              X
                            </button>
                          </div>

                          <div class="cardimgtime-cont">
                            <div class="cardimg">
                              <img
                                src={businesses[card].img}
                                alt={index}
                                class="img-fluid rounded"
                              />
                            </div>
                            <div class="timing-sec">
                              <div class="timediv">
                                <div class="icon"></div>
                                <div class="timehead">
                                  <h4>Timing</h4>
                                </div>
                                <div class="timing">
                                  <p class="lead">{businesses[card].Timing}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="cardcontent mt-4">
                            <div class="business-title">
                              <h4 class="">{businesses[card].name}</h4>
                            </div>
                            <div class="business-category">
                              <h5 class="text-muted">
                                {businesses[card].category}
                              </h5>
                            </div>
                            <div class="business-taluka">
                              <h5 class="text-muted">
                                {businesses[card].Taluka}
                              </h5>
                            </div>

                            <div class="details-table table-responsive">
                              <table class="table table-bordered">
                                <tbody>
                                  <tr>
                                    <td class="fw-bold">Contact Number:</td>
                                    <td>{businesses[card].ContactNumber}</td>
                                  </tr>
                                  <tr>
                                    <td class="fw-bold">Description:</td>
                                    <td>{businesses[card].description}</td>
                                  </tr>
                                  <tr>
                                    <td class="fw-bold">Speciality:</td>
                                    <td>{businesses[card].Speciality}</td>
                                  </tr>
                                </tbody>
                              </table>
                              <h2 class="mt-4">Direction</h2>
                              <div class="embed-responsive embed-responsive-16by9">
                                <iframe
                                  src={businesses[card].mapurl || ""}
                                  class="embed-responsive-item"
                                  frameborder="0"
                                  allowfullscreen=""
                                  aria-hidden="false"
                                  tabindex="0"
                                ></iframe>
                              </div>
                            </div>
                            {/* <div class="modal-footer mt-4">
          <button type="button" class="btn btn-secondary btn-lg btn-block" data-bs-dismiss="modal">Close</button>
        </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
