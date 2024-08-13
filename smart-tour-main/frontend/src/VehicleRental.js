import React, { useState, useEffect } from "react";
import "./vehicle.css";
import TwoWheeler from "TwoWheeler";
import FourWheeler from "FourWheeler";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function VehicleRental() {
  AOS.init()
  const [category, setCategory] = useState("twowheeler");
  const [lodgecolor, setLColor] = useState(true);
  const [pgcolor, setPColor] = useState(false);
  return (
    <>
      <div className="vehicle-bg">
        <h1
          className="display-5 fw-bold mb-6 text-center bg-text "
          style={{ color: "white" }}
          data-aos="fade-up"   data-aos-offset=""
          data-aos-delay="10"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          Vehicles Rental
        </h1>
      </div>
      <div className="vehicle-rental-div">
        <div class="centered-buttons " data-aos="fade-up"   data-aos-offset=""
          data-aos-delay="10"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out">
          <button
            id=" twowheeler lodges-button"
            style={{ backgroundColor: `${lodgecolor ? "#ffc09f" : ""}` }}
            onClick={() => (
              setCategory("twowheeler"), setLColor(true), setPColor(false)
            )}
          >
          Two Wheeler(Scooter,Bike,Bicycle)
          </button>
          <button
            id="fourwheeler paying-guest-button"
            style={{ backgroundColor: `${pgcolor ? "#ffc09f" : ""}` }}
            onClick={() => (
              setCategory("fourwheeler"), setPColor(true), setLColor(false)
            )}
          >
           Four Wheeler (Cars)
          </button>
        </div>

        {category === "twowheeler" ? <TwoWheeler /> : <FourWheeler />}
      </div>
    </>
  );
}
