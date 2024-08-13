import { useState } from "react";

function Footer() {
  return (
    <>
      {/* start footer Area */}
      <footer className="footer-area section-gap text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  We Provide Tour Plans for your most comfortable travel ever.
                  Let yourself dive into the Beauty, Culture &amp; festivals of
                  Ratnagiri. Have You're Good time at Ratnagiri.
                </p>
              </div>
            </div>
            <div className="col-lg-5  col-md-6 col-sm-6">
              <p className="footer-text">
                &copy;Copyright
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This Website is created with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by Rishabh,
                Saud and Aalia
              </p>
            </div>
            {/* <div className="col-lg-5  col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h6>Newsletter</h6>
            <p>Stay update with our latest</p>
            <div className="" id="mc_embed_signup">
                 <form target="_blank"  action="" method="get" className="form-inline">
                <input className="form-control" name="EMAIL" placeholder="Enter Your Email Here"  required="" type="email"/>
                                <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                             
                <div className="info"></div>
              </form>
            </div>
          </div>
        </div>						 */}
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-snapchat"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
