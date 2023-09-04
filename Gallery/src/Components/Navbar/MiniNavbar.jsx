import React from 'react'

const MiniNavbar = () => {
  return (
    <div className='bg-[#006400] py-3' >
        <ul className='flex flex-row justify-around items-end ml-30'>
            <li className='text-gray-300 font-bold text-lg'><a href='#home'>Explore Kenya</a></li>
            <li className='text-white font-bold text-lg'><a href='#about'>About Us</a></li>
            <li className='text-white font-bold text-lg'><a href='#home'>Gallery</a></li>
            <li className='text-white font-bold text-lg'><a href='#home'>Blog</a></li>
            <li className='text-white font-bold text-lg'><a href='#home'>Open Market </a></li>
            <li className='text-white font-bold text-lg'><a href='#home'>Contact Us</a></li>
        </ul>
      
    </div>
  )
}

export default MiniNavbar
