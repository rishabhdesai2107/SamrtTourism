import { Helmet } from 'react-helmet-async';

import { View } from 'src/sections/itineraries/view';


// ----------------------------------------------------------------------

export default function itineraries() {
  return (
    <>
    <Helmet>
      <title> Itineraries | Smart Tourism </title>
    </Helmet>

    <View />
  </>
  )
}
