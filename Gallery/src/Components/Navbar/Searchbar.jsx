import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'

const Searchbar = () => {
  return (
    <div className ='flex flex-col items-center min-w-[200px] pr-10'>
      <div className ='bg-[#008000] w-full flex items-center rounded-[10px] px-[15px] h-[2.5rem]'>
        <BiSearchAlt className='text-3xl text-gray-900'/>
        <input className='bg-[#008000] border-none outline-none h-full text-lg w-full ml-[5px] py-2 text-gray-100' type='text' placeholder='Search for a landscape' />
      </div>
      <div>Search Results</div>

    </div>
  )
}

export default Searchbar

