// Lodges.js

import React, { useEffect, useState } from "react";
// import lodgesData from "./lodgesData.json";
import './lodge.css'
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



function Lodges() {
  AOS.init();
  const [LodgeData, setLodgeData] = useState([])
useEffect(() => {
  fetchLodgeData();
}, [])

  const fetchLodgeData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND}/lodgepg/lodgepg`
      );
      const lodgeData = response.data.data.filter(entry => entry.category === 'Lodge');
      console.log("lodge dataa" ,lodgeData)
      setLodgeData(lodgeData)
      return lodgeData;
    } catch (error) {
      console.error('Error fetching lodge data:', error);
      return null; // Handle the error as per your application's requirement
    }
  };
  return (
    // <section className="page pagelodges">
   <>
    <div className="lodgepage lppage" >
       {
      LodgeData.map((item,index)=>(
        <div class="cardss" key={index} data-aos="fade-in"   data-aos-offset="200"
        data-aos-delay="30"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        >
        <img src={item.image} data-aos="slide-left"   data-aos-offset="10"
        data-aos-delay="20"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out" />
        <div>
          <h2>{item.name}</h2> 
          <p>{item.description}</p>
          <a href={item.url}><button>Direction</button></a>
        </div>
      </div>

      ))
    }
      
      </div>
      </>
    // </section>
  );
}

export default Lodges;
