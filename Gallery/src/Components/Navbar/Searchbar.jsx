import React , {useState} from 'react'
import {BiSearchAlt} from 'react-icons/bi'

const Searchbar = () => {
const [input, setInput] =useState('')

  return (
    <div className ='hidden lg:flex flex-col items-center justify-center min-w-[150px] pl-5 pr-10'>
      <div className ='bg-gray-200 w-full flex items-center rounded-[10px] px-[15px] h-[2.5rem]'>
        <BiSearchAlt className='text-3xl text-gray-900'/>
        <input value={input}  onChange={(e) => setInput(e.target.value)} className='bg-gray-200 border-none outline-none h-full text-lg w-full ml-[5px] py-2 text-black' type='text' placeholder='Search' />
      </div>
      

    </div>
  )
}

export default Searchbar

