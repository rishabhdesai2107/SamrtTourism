import React from "react";
import "./mystyle.css";
import ItineraryData from "./itinerary.json";

export default function Itinerary() {
  return (
    <>
      <div className="travel-itinerary-cont">
        <div className="bg-itinerary-img">
          {/* <img
            src="https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/6/1/6/1264616/0/106084258477265252720996790483947013545641o.jpg"
            alt=""

          /> */}
          <h1 className="display-5 fw-bold mb-6 text-center  bg-text " style={{color:"white"}}>
            Travel Itenaries
          </h1>
        </div>

        <div className="py-8  m-4">
          
          <div className="row g-6">
            {ItineraryData.map((day, index) => (
              <div className="col-12 col-md-6 col-lg-4 mt-4 mb-4" key={index}>
                <div className="card rounded shadow-lg h-100">
                  <div className="card-body d-flex align-items-center flex-column justify-content-center text-center p-5">
                    <picture className="avatar">
                      <img
                        className="img-fluid rounded-circle"
                        src="./assets/images/profile-small-2.jpeg"
                        alt=""
                      />
                    </picture>
                    <p className="lead fw-bolder mb-0 ">Day {day.day}</p>
                    <p className="text-primary small fw-bold mb-4">
                      {day.heading}
                    </p>
                    <ul className="list-unstyled d-flex flex-column mb-0 text-left ">
                      {day.activities.map((activity, i) => (
                        // <li key={i}>{activity}</li>
                        <li className="mx-2 my-3" key={i}>
                          {activity}
                        </li>
                      ))}
                      {/* <li className="mx-2"><a href="#" className="text-decoration-none"><i className="ri-facebook-box-fill ri-2x"></i></a></li> */}
                      {/* <li className="mx-2"><a href="#" className="text-decoration-none"><i className="ri-twitter-fill ri-2x"></i></a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
