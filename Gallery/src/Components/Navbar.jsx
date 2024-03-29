import React from 'react'
import { BsYoutube } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className ='m-5 flex justify-between items-center'>
      <div className =''>
        <h1 className='text-2xl xl:text-3xl font-semibold text-black'>Talii<i className='text-red-700 text-3xl'>Ke</i></h1>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex md:gap-20 xl:gap-28 gap-5'>
          <li className='font-semibold cursor-pointer hover:text-red-600'><a href='/'>Home</a></li>
          <li className='font-semibold cursor-pointer hover:text-red-600'><a href='#BlogIntro'>About</a></li>
          <li className='font-semibold cursor-pointer hover:text-red-600'><a href='#Gallery'>Gallery</a></li>
          <li className='font-semibold cursor-pointer hover:text-red-600'><a href='#Blog'>Blog</a></li>
        </ul>
      </div>
      <div className ='bg-red-500 px-5 md:px-4 xl:px-8 py-2 rounded-full'>
        <button className='cursor-pointer hover:text-white'>
          <a href='#' className=' flex flex-row justify-center items-center md:font-semibold'>
           Subscribe <BsYoutube className='ml-2 flex items-center'/>
        </a></button>
      </div>
    </div>
  )
}

export default Navbar
