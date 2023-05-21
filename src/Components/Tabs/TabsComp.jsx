import { Tabs } from 'flowbite-react'
import React from 'react'
import CardComp from '../card/CardComp'

const TabsComp = () => {
  return (
  <>
    <div className=' my-20  flex justify-center text-center'>
    <div className=''>

<Tabs.Group className=''
  aria-label="Tabs with underline"
  style="underline"
>
  <Tabs.Item title=" Mini car Toy">
  
  <div className='flex gap-5'>
  <CardComp/>
  <CardComp/>
  <CardComp/>  
  

  </div>
  </Tabs.Item>
  <Tabs.Item
    active={true}
    title="Luxery Car Toy "
  >
    <div className='flex gap-5'>
  <CardComp/>
  <CardComp/>
  <CardComp/>
  </div>
  </Tabs.Item>
  <Tabs.Item title="Electric Car Toy ">
  <div className='flex gap-5'>
  <CardComp/>
  <CardComp/>
  <CardComp/>
  </div>
  </Tabs.Item>


</Tabs.Group>
    </div>
  
    </div>
  </>
  )
}

export default TabsComp