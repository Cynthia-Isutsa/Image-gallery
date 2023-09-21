import React from 'react'
import Navbar5 from '../assets/Navbar5.jpg'
import {BiSearch} from 'react-icons/bi'


const Header = () => {

  const tags =[
    {
      id:1,
      name:'All'
    },
    {
      id:2,
      name:'Game Parks'
    },
    {
      id:3,
      name:'Hiking'
    },
    {
      id:4,
      name:'Beaches'
    },
    {
      id:5,
      name:'Lakes'
    }
  ]


  return (
    <div className = 'flex flex-col m-5 px-[40px] md:px-[70px]'>
      <div className = ' h-full w-full'>
           <img src={Navbar5} alt='headerImage' className='w-full h-full rounded-xl' />
      </div>
      <div className='flex bg-white shadow-lg rounded-lg px-4 py-2 mt-[-20px] mx-[25%]'>
        <BiSearch  size={30} className= 'mr-1 text-gray-400'/>
        <input type='text' placeholder='search' className='outline-none border-none ' />
      </div>
      <div className='flex justify-center items-center gap-5 md:gap-14 mt-5'>
        {tags.map((item) => (
          <ul className='flex gap-5 md:gap-14'>
             <li clasName=''>{item.name}</li>
          </ul>
        ))}
      </div>

      {/*<div >
        
  </div>*/}
    </div>
  )
}

export default Header
