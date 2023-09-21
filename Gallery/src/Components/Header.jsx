import React from 'react'
import Navbar5 from '../assets/Navbar5.jpg'
import {BiSearch} from 'react-icons/bi'

const Header = () => {
  return (
    <div className = 'flex flex-col m-5 px-[40px] md:px-[70px]'>
      <div className = ' h-full w-full'>
           <img src={Navbar5} alt='headerImage' className='w-full h-full rounded-xl' />
      </div>
      <div className='flex bg-white shadow-lg rounded-lg px-4 py-2 mt-[-20px] mx-[25%]'>
        <BiSearch  size={30} className= 'mr-1 text-gray-400'/>
        <input type='text' placeholder='search' className='outline-none border-none ' />

      </div>
      <div className='flex justify-center items-center mt-5'>
        <ul className='flex justify-center items-center gap-5 md:gap-14'>
        <li><a href='#'className='font-semibold cursor-pointer hover:text-red-600'>All</a></li>
          <li><a href='#'className='font-semibold cursor-pointer hover:text-red-600'>Game Parks</a></li>
          <li><a href='#'className='font-semibold cursor-pointer hover:text-red-600'>Hiking</a></li>
          <li><a href='#'className='font-semibold cursor-pointer hover:text-red-600'>Beaches</a></li>
          <li><a href='#'className='font-semibold cursor-pointer hover:text-red-600'>Lakes</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
