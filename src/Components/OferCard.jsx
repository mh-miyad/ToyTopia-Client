import React from 'react'
import card1 from '../assets/card/12123img.png'
import card2 from '../assets/card/12img.png'
import card3 from '../assets/card/1212img.png'

const OferCard = () => {
  return (
    <div className='flex justify-center '>
       
        <div className=' grid grid-cols-2 md:grid-cols-4  gap-10'>
            <div>
                <img src={card1} alt=""  className='rounded-xl shadow-2xl '/>
            </div>
            <div>
                <img src={card2} alt=""  className='rounded-xl shadow-2xl '/>
            </div>
            <div>
                <img src={card3} alt=""  className='rounded-xl shadow-2xl '/>
            </div>
            <div>
                <img src={card1} alt=""  className='rounded-xl sadow-2xl '/>
            </div>
        </div>



    </div>
  )
}

export default OferCard