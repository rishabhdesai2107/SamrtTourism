import { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
function Header() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);


  const navbarToggleRef = useRef(null);

  const handleCloseMunu = () => {
    // Check if the ref is defined before triggering the click event
    if (navbarToggleRef.current) {
      navbarToggleRef.current.click();
    }
  };

  return (
    <>
      <header
        className="default-header"
        style={{ background: "#000042", height: "55px" }}
      >
        <nav
          className="navbar navbar-expand-lg  navbar-light"
          style={{ height: "55px" }}
        >
          <div className="container">
            <a className="navbar-brand text-white font-weight-bold" href="/">
              <img
                src="img/logo_main.png"
                alt="smart tourism logo"
                style={{ width: "100px", height: "40px" }}
              />
            </a>
            <button
             ref={navbarToggleRef}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-white lnr lnr-menu"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li onClick={handleCloseMunu}>
                  <a href="/">Home</a>
                  {/* <Link to="/">Home</Link> */}
                  {/* <HashLink to="/#home">Home</HashLink> */}

                </li>
                <li onClick={handleCloseMunu}>
                  <a href="/about-us">About Us</a>
                  {/* <Link to="/about-us">About Us</Link> */}
                </li>
                <li onClick={handleCloseMunu}>
                  <a href="/businessrtn">Business</a>
                  {/* <Link to="/businessrtn">Business</Link> */}
                </li>
                <li onClick={handleCloseMunu}>
                  <a href="/blog">Blogs</a>
                  {/* <Link to="/blog">Blogs</Link> */}
                </li>
                <li onClick={handleCloseMunu}>
                  {/* <a href="/#portfolio">Places</a> */}
                  <HashLink to="/#portfolio">Places</HashLink>
                </li>
                <li onClick={handleCloseMunu}>
                  {/* <a href="/#service">Services</a> */}
                  <HashLink to="/#Servicess">Services</HashLink>
                </li>
                <li onClick={handleCloseMunu}>
                  {/* <a href="/#contactus">Contact Us</a> */}
                  <HashLink to="/#contactus">Contact Us</HashLink>
                  
                </li>
              </ul>
              <form className="form-inline">
                <a id="google_translate_element"></a>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
