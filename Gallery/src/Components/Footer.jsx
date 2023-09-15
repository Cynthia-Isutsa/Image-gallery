import React from 'react'
import {BsWhatsapp, BsTwitter, BsInstagram} from 'react-icons/bs'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'

const Footer = () => {
  return (
  <div className='bg-[#006400] py-3' >
    <div className='bg-[#006400] py-3 flex justify-between'>
      <div className='flex md:pl-10 flex-col justify-start items-start mb-4'>
        <h1 className='text-2xl mb-4 text-gray-400 font-bold'>TaliiKenya</h1>
        <p className='text-white text-sm'>Hiking Sports</p>
        <p className='text-white text-sm'>Wild Animals</p>
        <p className='text-white text-sm'>Culture</p>
        <p className='text-white text-sm'>Lakes</p>
        <p className='text-white text-sm'>Beaches</p>
        <p className='text-white text-sm'>Sundowner spots</p>
      </div>

      <div className='flex md:pl-10 flex-col justify-start items-start mb-4'>
        <h1 className='text-2xl mb-4 text-gray-400 font-bold'>TaliiKenya</h1>
        <p className='text-white text-sm'>The Abardares</p>
        <p className='text-white text-sm'>Amboseli National Park</p>
        <p className='text-white text-sm'>Masai Mara</p>
        <p className='text-white text-sm'>Wildebeest Migration</p>
        <p className='text-white text-sm'>Lake Nakuru</p>
        <p className='text-white text-sm'>Samburu</p>    
      </div>

      <div className='flex flex-col justify-center items-center mr-10'>
        <div className='flex justify-start items-start'>
          <AiOutlineMail size={27} className= 'text-white mx-5'/>
          <p className='text-lg text-white'>isutsacynthia@gmail</p>
        </div>
        <div className='flex justify-start items-start my-5'>
          <AiOutlinePhone size={27} className= 'text-white mx-5'/>
          <h1 className='text-lg text-white'>+254 727035487</h1>
        </div>

        <div className='flex'>
          <a target='_blank' href='https://twitter.com/Nisutsa'>
           <BsInstagram size={27} className='text-white'/>
          </a>
          <a target='_blank'  href='https://twitter.com/Nisutsa'>
            <BsTwitter size={27} className='mx-10 text-white'/>
          </a>
          <a target='_blank' href='https://twitter.com/Nisutsa'>
            <BsWhatsapp size={27} className='text-white'/>
          </a>
        </div>
      </div>
    </div>

    <div className='text-center mt-5'>
        <p className='text-sm text-gray-300'>Copyright &#169;2023. Talii Kenya. All Rights Researved</p>
      </div>
  </div>
  )
}

export default Footer
