import { Tabs } from 'flowbite-react'
import React from 'react'
import CardComp from '../card/CardComp'
import CardComp2 from '../card/CardComp2'



const TabsComp = () => {

   const data1 =[
    {
      "toy_name": " Venom ",
      "price": 19.99,
      "ratings": 4.5,
      "img": "https://i.ibb.co/rsXN4by/Black-Panther-Vibranium-Warrior.jpg"
    },
    {
      "toy_name": " Iron Man ",
      "price": 49.99,
      "ratings": 4.8,
      "img": "https://i.ibb.co/1TDxCG4/avengers-1.jpg"
    },
    {
      "toy_name": "Black Widow ",
      "price": 79.99,
      "ratings": 4.2,
      "img": "https://i.ibb.co/j8hcyrp/Black-Widow-Assassin.jpg"
    }
  ]
   const data2 =[
    {
      "toy_name": " Bumblebee",
      "price": 19.99,
      "ratings": 4.5,
      "img": "https://i.ibb.co/chf7Qk3/Bumblebee-Guardian-of-Earth.jpg"
    },
    {
      "toy_name": " Megaton ",
      "price": 49.99,
      "ratings": 4.8,
      "img": "https://i.ibb.co/nC8pPNT/Megatron-Decepticon-Overlord.jpg"
    },
    {
      "toy_name": "Optimus ",
      "price": 79.99,
      "ratings": 4.2,
      "img": "https://i.ibb.co/QfJnxJP/Optimus-Prime.jpg"
    }
  ]
   const data3 =[
    {
      "toy_name": "Worlverinen",
      "price": 19.99,
      "ratings": 4.5,
      "img": "https://i.ibb.co/9rWMVBD/Wolverine-Berserker.jpg"
    },
    {
      "toy_name": "  Rey",
      "price": 49.99,
      "ratings": 4.8,
      "img": "https://i.ibb.co/ct1xctR/Rey-The-Force-Awakens.jpg"
    },
    {
      "toy_name": "StartFace ",
      "price": 79.99,
      "ratings": 4.2,
      "img": "https://i.ibb.co/dpYYc4Y/Captain-Starforce.jpg"
    }
  ]
  

  return (
  <>
    <div className=' my-20  flex justify-center text-center'>
    <div className=''>

<Tabs.Group className=''
  aria-label="Tabs with underline"
  style="underline"
>
  <Tabs.Item title=" Avengers MCU">
  
  <div className='flex gap-5 flex-wrap'>
     {
      data1.map((ele ,index)=>  <CardComp2 img={ele.img} name={ele.toy_name} price={ele.price} key={index} id={index} ratings={ele.ratings}/>)
     }
  

  </div>
  </Tabs.Item>
  <Tabs.Item
    active={true}
    title="TransFormations "
  >
   <div className='flex gap-5 flex-wrap'>
     {
      data2.map((ele ,index)=>  <CardComp2 img={ele.img} name={ele.toy_name} price={ele.price} key={index} id={index} ratings={ele.ratings}/>)
     }
  

  </div>
  </Tabs.Item>
  <Tabs.Item title=" Comics Series  ">
  <div className='flex gap-5 flex-wrap'>
     {
      data3.map((ele ,index)=>  <CardComp2 img={ele.img} name={ele.toy_name} price={ele.price} key={index} id={index} ratings={ele.ratings}/>)
     }
  

  </div>
  </Tabs.Item>


</Tabs.Group>
    </div>
  
    </div>
  </>
  )
}

export default TabsComp