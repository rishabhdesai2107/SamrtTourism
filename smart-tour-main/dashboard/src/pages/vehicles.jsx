import { Helmet } from 'react-helmet-async';

import { View } from 'src/sections/vehicles/view';

// ----------------------------------------------------------------------

export default function VehiclesPage() {
  return (
    <>
      <Helmet>
        <title> Rentals | Smart Tourism </title>
      </Helmet>

      <View />
    </>
  );
}
