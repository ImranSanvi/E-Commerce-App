import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './route/Router.jsx'
import { ToastContainer } from 'react-toastify'
import ContextProvider from './Provider/ContextProvider.jsx'
import CartProvider from './Provider/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </CartProvider>
    </ContextProvider>
  </StrictMode>,
)
