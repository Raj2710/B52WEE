import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppRoutes from './config/AppRoutes'
function App() {

  const router = createBrowserRouter(AppRoutes)

  return <>
  <RouterProvider router={router}/>
  </>
}

export default App