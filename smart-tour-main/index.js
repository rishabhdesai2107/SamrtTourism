const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const blogRouter = require("./Routes/BlogRoutes");
const reviewRouter = require("./Routes/ReviewRoutes");
const BusinessRouter = require("./Routes/BusinessRoutes");
const ContactUsRoutes = require("./Routes/ContactUsRoutes");
const ItineraryRoutes = require("./Routes/Itinerary");
const LodgePgRoutes = require("./Routes/LodgePg");
const MonumentsRoutes = require("./Routes/Monuments");
const PlacesRouter = require("./Routes/PlacesRoutes");
const UserRouter = require("./Routes/UserRoutes");
const VehicleRentalRoutes = require("./Routes/VehicleRental");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './frontend/build')));

const port = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Server got connected");
  } catch (err) {
    console.log(`DB Server got error ${err.message}`);
  }
};

connectDb();

app.use("/blogs", blogRouter);
app.use("/reviews", reviewRouter);
app.use("/business", BusinessRouter);
app.use("/contactus", ContactUsRoutes);
app.use("/itinerary", ItineraryRoutes);
app.use("/lodgepg", LodgePgRoutes);
app.use("/monument", MonumentsRoutes);
app.use("/places", PlacesRouter);
app.use("/user", UserRouter);
app.use("/vehicle", VehicleRentalRoutes);


// app.get("/", (req, res) => {
//   res.send("App is running");
// });

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build/index.html'));
});


const server = app.listen(port, () => {
  console.log(`App is listening on port no ${port}`);
});






