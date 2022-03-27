import React, { Suspense, lazy, FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from 'router/index'
import 'styles/index.scss'
const Header = lazy(() => import('components/Header'))

const App: FC = () => {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Suspense>
  )
}

export default App
