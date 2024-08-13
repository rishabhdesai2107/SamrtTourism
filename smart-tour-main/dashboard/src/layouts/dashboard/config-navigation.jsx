import SvgColor from 'src/components/svg-color';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HotelIcon from '@mui/icons-material/Hotel';
import PlaceIcon from '@mui/icons-material/Place';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import BookIcon from '@mui/icons-material/Book';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReviewsIcon from '@mui/icons-material/Reviews';
import CastleIcon from '@mui/icons-material/Castle';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Business',
    path: '/business',
    icon: <BusinessCenterIcon/>,
  },
  {
    title: 'Places',
    path: '/places',
    icon: <PlaceIcon/>,
  },
  {
    title: 'Hotels',
    path: '/hotels',
    icon: <HotelIcon/>,
  },
  {
    title: 'Vehicles',
    path: '/vehicles',
    icon: <DirectionsCarFilledIcon/>,
  },
  {
    title: 'Blogs',
    path: '/blogss',
    icon:<BookIcon/>,
  },
  {
    title: 'Contact Us',
    path: '/contactus',
    icon: <ContactsIcon/>,
  },
  {
    title: 'Reviews',
    path: '/reviews',
    icon: <ReviewsIcon/>,
  },
  {
    title: 'Monuments',
    path: '/monuments',
    icon: <CastleIcon/>,
  }, {
    title: 'Itineraries',
    path: '/itineraries',
    icon: <EditCalendarIcon/>,
  },


];

export default navConfig;
