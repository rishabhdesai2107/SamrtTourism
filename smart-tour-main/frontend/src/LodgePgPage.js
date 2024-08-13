import { useState, useEffect } from "react";
import Lodges from "lodge";
import PayingGuest from "PayingGuest";
import AOS from 'aos';
import 'aos/dist/aos.css';

function LodgePgPage() {
  AOS.init()
  useEffect(() => {
    // Dynamically import styles when the component mounts
    import("./lodgepg.css");
    // Add cleanup code if necessary
    return () => {
      // Cleanup code if needed
    };
  }, []);
  const [category, setCategory] = useState("lodges");
  const [lodgecolor, setLColor] = useState(true);
  const [pgcolor, setPColor] = useState(false);
  return (
    <>
      {/* <header> */}
      <div className="hotel-bg-img">
        <h1
            className="display-5 fw-bold mb-6 text-center  bg-text "
            style={{ color: "white" }}
            data-aos="fade-up"   data-aos-offset=""
            data-aos-delay="10"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
           Hotel and Lodges and Pgs
          </h1>
        </div>
      <div className="lodgepgpage-con">
     
        {/* <nav class="fixed-navbar"> */}
        <div class="centered-buttons " data-aos="fade-up"   data-aos-offset=""
          data-aos-delay="10"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out">
          <button id="lodges-button" 
          style={{backgroundColor:`${lodgecolor? "#ffc09f":""}`}}
          onClick={() =>(setCategory("lodges"), setLColor(true),setPColor(false))}>
            Lodges
          </button>
          <button
            id="paying-guest-button"
          style={{backgroundColor:`${pgcolor? "#ffc09f":""}`}}

            onClick={() => (setCategory("paying-guest"), setPColor(true),setLColor(false))}
          >
            Paying Guest
          </button>
        </div>
        {/* <Lodges/> */}
        {/* </nav> */}
        {/* </header> */}
        {category === "lodges" ? <Lodges /> : <PayingGuest />}
      </div>
    </>
  );
}

export default LodgePgPage;
