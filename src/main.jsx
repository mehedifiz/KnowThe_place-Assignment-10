import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './firebase/AuthProvider' // Make sure this path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className=''>        <ToastContainer />
        <RouterProvider router={router} />
        </div>

    </AuthProvider>
  </React.StrictMode>,
)
