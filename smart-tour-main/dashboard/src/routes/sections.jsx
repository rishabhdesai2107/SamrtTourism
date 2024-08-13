import { lazy, Suspense, useEffect } from 'react';
import { Outlet, Navigate, useRoutes, useNavigate } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import BlogsPage from 'src/pages/blogs';
import ContactusPage from 'src/pages/contactus';
import HotelPage from 'src/pages/hotels';
import PlacesPage from 'src/pages/places';
import VehiclesPage from 'src/pages/vehicles';
import ReviewPage from 'src/pages/reviews';
import MonumentsPage from 'src/pages/monuments';
import ItineraryPage from 'src/pages/itineraries';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BusinessPage = lazy(() => import('src/pages/business'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token is present in local storage
    const token = localStorage.getItem('token');

    // If the token is not found, redirect to the login page
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'business', element: <BusinessPage /> },
        { path: 'places', element: <PlacesPage /> },
        { path: 'hotels', element: <HotelPage /> },
        { path: 'vehicles', element: <VehiclesPage /> },
        { path: 'blogss', element: <BlogsPage /> },
        { path: 'contactus', element: <ContactusPage /> },
        { path: 'reviews', element: <ReviewPage/> },
        { path: 'itineraries', element: <ItineraryPage /> },
        { path: 'monuments', element: <MonumentsPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
