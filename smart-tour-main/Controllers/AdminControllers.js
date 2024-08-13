const express = require("express");
const UserModel = require("../modals/UserModel");
const BusinessModel = require("../modals/BusinessModel");
const Itinerary = require("../modals/Itinerary");
const Blogsmodel = require("../modals/Blogsmodel");
const LodgePg = require("../modals/LodgePg");
const Monuments = require("../modals/Monuments");
const PlacesModel = require("../modals/PlacesModel");
const ReviewModel = require("../modals/ReviewModel");
const VehicleRental = require("../modals/VehicleRental");
const ContactUs = require("../modals/ContactUs");
// const generateToken = require("../Config/TokenCreation");


const expresshandler = require("express-async-handler");

const dashboardController = expresshandler(async (req, res) => {
//   if (!name || !password) {
//     res.send("All the input fiels must be filled");
//   }
  const user = await UserModel.countDocuments();
  const business = await BusinessModel.countDocuments();
  const Itineraries = await Itinerary.countDocuments();
  const Blogs = await Blogsmodel.countDocuments();
  const Lodgepg = await LodgePg.countDocuments();
  const monuments = await Monuments.countDocuments();
  const places = await PlacesModel.countDocuments();
  const review = await ReviewModel.countDocuments();
  const vehicleRental = await VehicleRental.countDocuments();
  const contactus = await ContactUs.countDocuments();
  let response={
    totalUsers:user,
    totalBusiness: business,
    totalItineraries: Itineraries,
    totalBlogs: Blogs,
    totalLodgepg: Lodgepg,
    totalmonuments: monuments,
    totalplaces:places,
    totalreview:review,
    totalvehicleRental:vehicleRental,
    totalcontactus:contactus
  }
  

    res.send(response);

});



module.exports = { dashboardController };
