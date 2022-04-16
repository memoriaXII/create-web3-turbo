import Loader from 'components/Loader'
import React, { Suspense } from 'react'

//@ts-ignore
const LazyLoad = ({ component: Component, ...rest }) => (
  <>
    <Suspense fallback={<Loader />}>
      <Component {...rest} />
    </Suspense>
  </>
)

export default LazyLoad
