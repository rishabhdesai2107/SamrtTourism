import { Helmet } from 'react-helmet-async';

import { View } from 'src/sections/contactus/view';

// ----------------------------------------------------------------------

export default function ContactusPage() {
  return (
    <>
      <Helmet>
        <title> Contact Us | Smart Tourism </title>
      </Helmet>

      <View />
    </>
  );
}
