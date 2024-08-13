import { Helmet } from 'react-helmet-async';

import { View } from 'src/sections/business/view';

// ----------------------------------------------------------------------

export default function BusinessPage() {
  return (
    <>
      <Helmet>
        <title> Business | Smart Tourism </title>
      </Helmet>

      <View />
    </>
  );
}
