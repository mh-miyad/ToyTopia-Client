import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCom from './Components/Navbar/NavbarCom'
import FooterComp from './Components/FooterComp'
import { ToastContainer } from 'react-toastify';


  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  
  return (
    <div>
      <NavbarCom/>
      <Outlet/>
      <FooterComp/>
      <ToastContainer />

    </div>
  )
}

export default App