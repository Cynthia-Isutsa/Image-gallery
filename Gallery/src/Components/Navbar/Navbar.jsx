import React from 'react'
import MiniNavbar from './MiniNavbar'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className='flex flex-col'>
      <section className='flex flex-row justify-between items-center'>
        <div >
          <h1 className='text-4xl pt-5 pl-10 text-[#006400] font-bold'>ExploreKenya</h1>
          <p className='text-[#4b5320] italic pb-4 pl-10'>Land of scenic landscapes and vast wildlife.</p>
        </div>

        <div className='flex flex-row justify-around'>
          <h1 className ='text-3xl pr-4 font-bold text-[#006400]'>Donate</h1>
          <h2 className= 'text-2xl font-bold text-[#006400] pr-10'> Paybill: 777555</h2>
        </div>

        <div>
        <Searchbar />
        </div>
      </section>


      
  
      
      <MiniNavbar />
    

    </div>

  )
}

export default Navbar
