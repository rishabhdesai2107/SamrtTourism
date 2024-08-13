import { Helmet } from 'react-helmet-async';

import { View } from 'src/sections/reviews/view';


// ----------------------------------------------------------------------


export default function reviews() {
  return (
    <>
    <Helmet>
      <title> Reviews | Smart Tourism </title>
    </Helmet>

    <View />
  </>
  )
}

