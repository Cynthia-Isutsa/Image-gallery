import React from 'react'
import ExploreData from './ExploreData'


const Explore = () => {
  return (
    <div className='ml-7' >
      <div className='mb-10' >
        <h1 className ='capitalize text-4xl font-bold text-[#006400] text-center'>Some of the Featured wildlife preserves and Landscapes</h1>
      </div>

      <ExploreData />
<div className='flex justify-center items-end my-7'>
  <button className='bg-orange-600 py-4 px-20 rounded text-2xl font-bold'><a href='blogs'>Explore more about Kenya</a></button>
</div>

    </div>
  )
}

export default Explore
