import { FC, memo, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import LazyLoad from 'hoc/LazyLoad'

const Explore = lazy(() => import('pages/Explore'))
const LazyExplore = (props: any) => <LazyLoad component={Explore} {...props} />

const Router: FC = () => {
  return useRoutes([{ path: '/', element: <LazyExplore /> }])
}

export default memo(Router)
