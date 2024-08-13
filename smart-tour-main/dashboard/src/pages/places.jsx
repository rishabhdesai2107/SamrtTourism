import { Helmet } from 'react-helmet-async';

import { View } from 'src/sections/places/view';

// ----------------------------------------------------------------------

export default function PlacesPage() {
  return (
    <>
      <Helmet>
        <title> Places | Smart Tourism </title>
      </Helmet>

      <View />
    </>
  );
}
