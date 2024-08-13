import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Places from "Places";
import Header from "Header.js";
import Footer from "Footer.js";
import Historic from "Historic";
import LodgePgPage from "LodgePgPage";
// import './lodgepg.css'
import Blog from "Blog";
import About from "Aboutus";
import BusinessPages from "BusinessPages";
import BlogForm from "BlogForm";
import Itinerary from "Itinerary";
import VehicleRental from "VehicleRental";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="protfolio-wrap">
        <Header />
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/:name"} element={<Places />} />
          <Route path={"/historicplaces"} element={<Historic />} />
          <Route path={"/lodgepg"} element={<LodgePgPage />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/about-us"} element={<About />} />
          <Route path={"/businessrtn"} element={<BusinessPages />} />
          <Route path={"/admin"} element={<BlogForm />} />
          <Route path={"/itinerary"} element={<Itinerary />} />
          <Route path={"/rental"} element={<VehicleRental/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
