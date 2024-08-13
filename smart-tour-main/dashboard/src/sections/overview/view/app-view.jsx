
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HotelIcon from '@mui/icons-material/Hotel';
import PlaceIcon from '@mui/icons-material/Place';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import ReviewsIcon from '@mui/icons-material/Reviews';
import BookIcon from '@mui/icons-material/Book';
import ContactsIcon from '@mui/icons-material/Contacts';
import { green } from '@mui/material/colors';
import axios from "axios";
import { useState,useEffect } from 'react';

import AppWidgetSummary from '../app-widget-summary';


export default function AppView() {

  const [dashboardData, setDashboardData] = useState({});

  const fetchDashboard = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND}/user/admin`);
      setDashboardData(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Businesses"
            total={dashboardData.totalBusiness??0}
            color="info"
            icon={<BusinessCenterIcon sx={{ fontSize: 50,color: green[800] }}/>}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Places"
            total={dashboardData.totalplaces??0}
            color="success"
            icon={<PlaceIcon  sx={{ fontSize: 50,color: green[800] }}/>}
          />
        </Grid>


        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Hotels"
            total={dashboardData.totalLodgepg??0}
            color="warning"
            icon={<HotelIcon  sx={{ fontSize: 50,color: green[800] }}/>}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Vehicles"
            total={dashboardData.totalvehicleRental??0}
            color="error"
            icon={<DirectionsCarFilledIcon  sx={{ fontSize: 50,color: green[800] }}/>}
          />
        </Grid>
        </Grid>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Blogs"
            total={dashboardData.totalBlogs??0}
            color="success"
            icon={<BookIcon  sx={{ fontSize: 50,color: green[800] }} />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Contacts"
            total={dashboardData.totalcontactus??0}
            color="info"
            icon={<ContactsIcon  sx={{ fontSize: 50,color: green[800] }}/>}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Itineraries"
            total={dashboardData.totalItineraries??0}
            color="error"
            icon={<HolidayVillageIcon  sx={{ fontSize: 50,color: green[800] }}/>}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Reviews"
            total={dashboardData.
              totalreview
              ??0}
            color="error"
            icon={<ReviewsIcon  sx={{ fontSize: 50,color: green[800] }}/>}
          />
        </Grid>
        </Grid>
       
    </Container>
  );
  
}
