import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthContext from './Auth/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='container mx-auto'>
 <AuthContext>
 <RouterProvider router={router} />
 </AuthContext>
  </div>
  </React.StrictMode>,
)
