import React, { Suspense, lazy, FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from 'router/index'
import 'styles/index.scss'
import { Buffer } from 'buffer'

// NOTE: Buffer undefined discussions
// https://github.com/vitejs/vite/issues/3422
// https://github.com/vitejs/vite/discussions/3126#discussioncomment-655531
window.Buffer = Buffer
if (typeof (window as any).global === 'undefined') {
  window.global = window
}

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
