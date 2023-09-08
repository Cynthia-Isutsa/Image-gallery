import React, {useState} from 'react'
import Searchbar from './Searchbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <div className='w-[100%] flex lg:flex-row '>

      <div className='flex justify-start items-center' >
          <h1 className='lg:text-4xl text-2xl py-2 md:pl-10 text-[#006400] font-bold'>ExploreKenya</h1>
      </div>


      
        <ul className='hidden ml-4 rounded lg:flex lg:flex-1 lg:flex-row lg:justify-between px-5 items-center p'>
            <li className='text-[#006400] font-bold text-lg hover:text-black'><a href='#home'>Home</a></li>
            <li className='text-black font-bold text-lg pointer hover:text-gray-700'><a href='#about'>About Us</a></li>
            <li className='text-black font-bold text-lg pointer hover:text-gray-700'><a href='#gallery'>Gallery</a></li>
            <li className='text-black font-bold text-lg pointer hover:text-gray-700'><a href='#blog'>Blog</a></li>
            <li className='text-black font-bold text-lg pointer hover:text-gray-700'><a href='#market'>Open Market </a></li>
            <li className='text-black font-bold text-lg pointer hover:text-gray-700'><a href='#contacts'>Contact Us</a></li>
        </ul>
    

    <Searchbar />

      <div className = 'lg:hidden pt-5'>
      <GiHamburgerMenu  className = 'text-black text-2xl text-end' onClick={() => setToggleMenu(true)}/>
    
      {toggleMenu && (
      <div className= 'fixed top-0 left-0 w-full h-screen bg-white transition duration-500 flex flex-row justify-center items-center z-5 '> 
        <MdOutlineClose className= 'text-black text-2xl pointer absolute top-[20px] right-[20px]' onClick={() => setToggleMenu(false)} />

        <ul>
            <li className='text-[#006400] font-bold text-2xl pointer m-2 text-center hover:text-black'><a href='#home'>Explore Kenya</a></li>
            <li className='text-black font-bold text-xl pointer m-2 text-center hover:text-[#006400]'><a href='#about'>About Us</a></li>
            <li className='text-black font-bold text-xl pointer m-2 text-center hover:text-[#006400]'><a href='#gallery'>Gallery</a></li>
            <li className='text-black font-bold text-xl pointer m-2 text-center hover:text-[#006400]'><a href='#blog'>Blog</a></li>
            <li className='text-black font-bold text-xl pointer m-2 text-center hover:text-[#006400]'><a href='#market'>Open Market </a></li>
            <li className='text-black font-bold text-xl pointer m-2 text-center hover:text-[#006400]'><a href='#contacts'>Contact Us</a></li>
        </ul>

      </div>
    )
      }
      </div>
    

    </div>

  )
}

export default Navbar
