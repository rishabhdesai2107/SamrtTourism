import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TwoWheeler() {
  AOS.init();
  const [TwoWheelersData, setTwoWheelersData] = useState([]);
  const [showContactIndex, setShowContactIndex] = useState(null);

  useEffect(() => {
    fetchTwoWheelers();
  }, []);

  const fetchTwoWheelers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/vehicle/vehicle-rentals`
      );
      const TwoWheelerData = response.data.data.filter(
        (entry) => entry.category === "TwoWheeler"
      );
      setTwoWheelersData(TwoWheelerData);
      return TwoWheelerData;
    } catch (error) {
      console.error("Error fetching lodge data:", error);
      return null; // Handle the error as per your application's requirement
    }
  };

  const showContactNumber = (index) => {
    setShowContactIndex(index === showContactIndex ? null : index);
  };
  return (
    <>
      <div className="TwoWheeler lppage div-center">
        {TwoWheelersData.map((item, index) => (
          <div
            class="cardss"
            key={index}
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={`${item.image}`}
              data-aos="slide-left"
              data-aos-offset="10"
              data-aos-delay="30"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            />
            <div>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              {showContactIndex === index && (
                <p style={{ height: "auto" }} className="showNumber">
                  Contact Number: {item.contactNumber}
                </p>
              )}

              <a href={`tel:+${item.contactNumber}`}>
                <button onClick={() => showContactNumber(index)}>
                  Contact
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
