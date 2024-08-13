// PayingGuest.js

import React, { useEffect, useState } from "react";
// import pgData from "./pgData.json";
import './lodge.css'
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function PayingGuest() {

  AOS.init();

  const [PgData, setPgData] = useState([])

  useEffect(() => {
    fetchPgData();
  }, [])
  


  const fetchPgData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/lodgepg/lodgepg`
      );
      const Pgdata = response.data.data.filter(entry => entry.category === 'PG');
      setPgData(Pgdata)
      return Pgdata;
    } catch (error) {
      console.error('Error fetching lodge data:', error);
      return null; // Handle the error as per your application's requirement
    }
  };
  return (
    // <section className="page paying-guest">
    <div className="pgpage lppage">
      {PgData.map((pg, index) => (
        <div class="cardss" key={index} data-aos="fade-in"   data-aos-offset="200"
        data-aos-delay="30"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out">
        <img src={pg.image} data-aos="slide-left"   data-aos-offset="10"
        data-aos-delay="30"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"/>
        <div>
          <h2>{pg.name}</h2> 
          <p>{pg.description}</p>
        <a href={pg.url}><button>Direction</button></a>  
        </div>
      </div>
      ))}
      </div>
    // </section>
  );
}

export default PayingGuest;
