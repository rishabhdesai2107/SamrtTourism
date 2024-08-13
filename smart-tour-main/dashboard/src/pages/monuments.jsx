import React from 'react'
import { Helmet } from 'react-helmet-async';

import { View } from 'src/sections/monuments/view';

// ----------------------------------------------------------------------

export default function monuments() {
  return (
    <>
    <Helmet>
      <title> Monuments | Smart Tourism </title>
    </Helmet>

    <View />
  </>
  )
}
