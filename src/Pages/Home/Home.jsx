import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import ServiceCard from '../../Components/card/ServiceCard'
import TabsComp from '../../Components/Tabs/TabsComp'
import CardComp from '../../Components/card/CardComp'
import { Button } from 'flowbite-react'
import AOS from 'aos';
import {Helmet} from "react-helmet";
import 'aos/dist/aos.css';
import GalarySec from '../../Components/GalarySec'
import HeaderMain from '../../Components/HeaderMain'
import OferCard from '../../Components/OferCard'
AOS.init();
const Home = () => {

  const [showHide , setShowHide] = useState(true);
  const [data ,setData] = useState([])

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-mh-miyad.vercel.app/allmytoy`)
  .then(res=>res.json())
  .then(resData => setData(resData))
  
    return () => {
      
    }
  }, [data])
  
 


  return (
    <div>

      <div> 
        <Helmet>
          <title> This Is Home page </title>
        </Helmet>
      </div>
      <div className='space-y-9'   data-aos="fade-up" 
   
 >
      <Header/>
<div data-aos="zoom-in-down">

      <ServiceCard/>
</div>
      </div>

      <div  data-aos="zoom-in-left">
        <TabsComp/>
      </div>
      <div data-aos="fade-down-right" className='mb-10'>
        <HeaderMain/>
      </div>
       <div data-aos="zoom-in-right">
       <h2 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl uppercase font-semibold'> All Toy That Pleasure You More </h2>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mt-10 mb-2'>
        {
         data.slice( 0 , !showHide? 10:1000).map((ele)=>{
          return <>
          <CardComp key={ele._id} id={ele._id} img={ele.image} name={ele.name} price={ele.price} ratings={ele.ratings}/>
          </>
         })
        }
       </div>
       { !showHide ? <Button onClick={()=>setShowHide(true)} className='mx-auto my-5'> Show More </Button>: <Button onClick={()=>setShowHide(false)} className='mx-auto my-5'> Show Less </Button>

       }
       </div>
       <div>
       <div className='text-center text-xl md:text-4xl font-bold text-indigo-600 my-8'> Avail Your Offer   Now </div>
        <OferCard/>
       </div>
       <div className='my-10'>
        <GalarySec/>

       </div>
    </div>
  )
}

export default Home