import { Helmet } from 'react-helmet-async';

import { View } from 'src/sections/blogs/view';

// ----------------------------------------------------------------------

export default function BlogsPage() {
  return (
    <>
      <Helmet>
        <title> Blogs | Smart Tourism </title>
      </Helmet>

      <View />
    </>
  );
}
