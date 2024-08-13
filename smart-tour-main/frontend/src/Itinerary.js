import React, { useEffect, useState } from "react";
import "./mystyle.css";
// import ItineraryData from "./itinerary.json";
import "./itinerary.css";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Itinerary() {
  AOS.init();

  const [itinerary, setItinerary] = useState([]);
  useEffect(() => {
    fetchItinerary();
  }, []);

  const fetchItinerary = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/itinerary/itinerary`
      );
      setItinerary(response.data.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching Itinerary:", error);
      return null; // Handle the error as per your application's requirement
    }
  };
  return (
    <>
      <div className="travel-itinerary-cont">
        <div className="bg-itinerary-img">
          {/* <img
            src="https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/6/1/6/1264616/0/106084258477265252720996790483947013545641o.jpg"
            alt=""

          /> */}
          <h1
            className="display-5 fw-bold mb-6 text-center  bg-text "
            style={{ color: "white" }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            Travel Itenaries
          </h1>
        </div>

        <div className="py-8  m-4">
          <div className="row g-6 d-flex itinerarydiv">
            {itinerary.map((day, index) => (
              <label id="summary">
                <input type="checkbox" />
                <article>
                  <div class="front">
                    <header>
                      {/* <h2>Day</h2> */}
                      {/* <span> more_vert </span> */}
                    </header>
                    <var>{day.day}</var>
                    <h3>Day</h3>
                    <h4>{day.heading}</h4>
                  </div>
                  <div class="back">
                    <header>
                      <h2>{day.heading}</h2>
                      <span> close </span>
                    </header>
                    <p>
                      <ul className="list-unstyled d-flex flex-column mb-0 text-left ">
                        {day.activities.map((activity, i) => (
                          // <li key={i}>{activity}</li>
                          <li className="mx-2 my-3" key={i}>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </p>
                  </div>
                </article>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
