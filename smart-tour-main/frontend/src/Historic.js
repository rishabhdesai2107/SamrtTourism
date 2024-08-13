import React, { useEffect, useState } from "react";
import "./mystyle.css";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Historic() {
  AOS.init()
  const [monuments, setMonuments] = useState([]);

  useEffect(() => {
    fetchMonuments();
    // setMonuments(monumentsData);
  }, []);
  
  const fetchMonuments = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/monument/monuments`
      );
      setMonuments(response.data.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching monuments:', error);
      return null; // Handle the error as per your application's requirement
    }
  };

  function createMonumentCard(monument) {
    return (
      <>
      
      <div className="card mt-4"  data-aos="fade-in"   data-aos-offset="200"
                data-aos-delay="20"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out">
        <div class="poster">

          <img src={monument.image} alt={monument.name} />
        </div>
        <div class="details">
          
          <p class="desc">{monument.description}</p>
          <a
          class="btn  btn-primary"
          href={monument.mapurl}
          role="button"
          style={{boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}
        >
          Direction
        </a>
        </div>
      </div>
      <h3 style={{textAlign:"center"}}>{monument.name}</h3>
      </>
    );
  }

  return (
    <>
     <div className="history-bg">
        <h1
            className="display-5 fw-bold mb-6 text-center  bg-text "
            style={{ color: "white" }}
            data-aos="fade-up"   data-aos-offset=""
            data-aos-delay="10"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
          Historic Monuments
          </h1>
        </div>
      <div className="wrapper">
        
        <div className="monument-container">
          {monuments.map((monument, index) => (
            <div key={index} >{createMonumentCard(monument)}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Historic;
