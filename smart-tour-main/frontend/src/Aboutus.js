import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  AOS.init()

  useEffect(() => {
    // Dynamically import styles when the component mounts
    import("./assets/bootstrap/css/bootstrap.min.css");
    import("./assets/css/scrolling-nav.css");

    // Add cleanup code if necessary
    return () => {
      // Cleanup code if needed
    };
  }, []);
  return (
    <div>
      <header class="about-div text-white p-4" style={{ opacity: "0.7" }}>
        <div class="about-container text-center" data-aos="fade-up" data-aos-offset="200"
          data-aos-delay="20"
          data-aos-duration="2000"
          data-aos-easing="ease-in">
          <h1 style={{ fontWeight: "bolder", color: "white" }}>
            Know about us!
          </h1>
          <p class="lead">Here you will find whats our motto and mission is</p>
        </div>
      </header>

      <section id="about" style={{ marginTop: "10vh" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center" data-aos="fade-in" data-aos-offset="200"
              data-aos-delay="20"
              data-aos-duration="2000"
              data-aos-easing="ease-in" style={{ marginTop: "5vh" }}>
              <h2>About Ratnagiri Tourism</h2>
              <p class="lead" style={{ marginTop: "2vh" }}>
                Discover Ratnagiri with us, where affordability meets
                excellence. Our services cater to those with budget constraints,
                ensuring you experience the best without breaking the bank.{" "}
              </p>
              {/* <ul style={{ marginTop: "5vh" }}> */}
              <div className="about-service-cont ">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 about-services" data-aos="slide-in" data-aos-offset="10"
                  data-aos-delay="30"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in">
                  <img src="https://cdn-icons-png.flaticon.com/512/3343/3343387.png" alt="" />
                  <h5>Affordable Travel Solutions:</h5>
                  <p>
                    Providing top-notch services while accommodating tight
                    budgets.
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 about-services" data-aos="slide-in" data-aos-offset="10"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in">
                  <img src="img/s1.png" alt="" />
                  <h5>Historic Monuments Exploration:</h5>
                  <p>
                    Guided tours to explore Ratnagiri's rich cultural heritage
                    and historic landmarks.
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 about-services" data-aos="slide-in" data-aos-offset="10"
                  data-aos-delay="70"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in">
                  <img src="img/s2.png" alt="" />
                  <h5>Hospitality Partnerships:</h5>
                  <p>
                    {" "}
                    Partnering with hotels and restaurants to offer quality
                    accommodation and dining experiences.
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 about-services" data-aos="slide-in" data-aos-offset="10"
                  data-aos-delay="90"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in">
                  <img src="img/s3.png" alt="" />
                  <h5>Tailored Travel Itineraries:</h5>
                  <p>
                    Customized travel plans designed to fit your preferences and
                    ensure a hassle-free trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="bg-light" style={{ marginTop: "10vh" }} >
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-12 mx-auto" data-aos="fade-in" data-aos-offset="100"
              data-aos-delay="20"
              data-aos-duration="2000"
              data-aos-easing="ease-in" style={{ marginTop: "5vh" }}  >
              <h2>Services we offer</h2>
              <p class="lead" style={{ marginTop: "2.5vh" }}>
                Explore the rich history of Ratnagiri through our curated tours
                of historic monuments. Immerse yourself in the vibrant culture
                and heritage of the region as our knowledgeable guides take you
                on a journey through time.
              </p>
              <p class="lead">
                Indulge in culinary delights and enjoy a comfortable stay at our
                partnered hotels and restaurants. From delectable cuisine to
                cozy accommodations, we offer a seamless experience tailored to
                your preferences.
              </p>
              <p class="lead">
                Leave the planning to us with our meticulously crafted travel
                itineraries. Whether you're a solo traveler or exploring with
                family and friends, our comprehensive packages ensure you make
                the most of your time in Ratnagiri without the hassle of
                planning. Let us take care of the details while you create
                lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="developers-section" className="about" style={{ marginTop: "10vh" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center" style={{ marginTop: "5vh" }}>
              <h2>Developers</h2>

              {/* <ul style={{ marginTop: "5vh" }}> */}
              <div className="about-developer-cont  " data-aos="fade-in" data-aos-offset="100"
                data-aos-delay="20"
                data-aos-duration="2000"
                data-aos-easing="ease-in">
                <div className="developer-header"></div>
                <div className="developer-col d-flex">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 developer-services ">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                    <h5 className="mt-2">Aalia</h5>
                    <p class="lead">Developer</p>

                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 developer-services">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                    <h5 className="mt-2">Saud</h5>
                    <p class="lead">Developer</p>


                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 developer-services">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                    <h5 className="mt-2">Rishabh</h5>
                    <p class="lead">Developer</p>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-end" class="bg-light" >
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-12 mx-auto" data-aos="fade-in" data-aos-offset="100"
              data-aos-delay="20"
              data-aos-duration="2000"
              data-aos-easing="ease-in" >
              <h1 style={{ color: "white" }}>START YOUR SEARCH TODAY</h1>
              <h3 class="lead" style={{ marginTop: "2.5vh", color: "white" }}>
                Explore the rich history of Ratnagiri through our Tourismwebsite
                Today.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
