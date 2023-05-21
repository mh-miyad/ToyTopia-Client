import { Carousel } from 'flowbite-react'
import React from 'react'

const CarouselComp = () => {
  return (
    <div className=''>
        <div className="h-56 sm:h-[50vh] xl:h-[80vh]">
  <Carousel>
   
    <img
      src="https://cdn.akamai.steamstatic.com/steam/apps/1271700/header.jpg?t=1683645423"
      alt="..."
    />
  
    <img
      src="https://cdn.shopify.com/s/files/1/1900/2575/files/24V-VoltRacer-Kids-Electric-Drift-Kart-Ride-On-Kart-180W-Brushless-Motor-True-24V-Ride-On-Banner_512x288.jpg?v=1682641221"
      alt="..."
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpQQ5rMs8Aeb3HR8PaxX7GGOPnTGusGNY7g&usqp=CAU"
      alt="..."
    />
    <img
      src="https://img.freepik.com/premium-psd/black-friday-car-automotive-super-sale-facebook-cover-template_106176-1583.jpg"
      alt="..."
    />
  </Carousel>
</div>
    </div>
  )
}

export default CarouselComp