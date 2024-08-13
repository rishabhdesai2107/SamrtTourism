import { Helmet } from 'react-helmet-async';

import { View } from 'src/sections/hotels/view';

// ----------------------------------------------------------------------

export default function HotelPage() {
  return (
    <>
      <Helmet>
        <title> Hotels | Smart Tourism </title>
      </Helmet>

      <View />
    </>
  );
}
