import React from 'react'
import {BsWhatsapp, BsTwitter, BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-[#006400] pb-3'>
      <div className='flex justify-center items-center mb-4'>
        <h1 className='lg:text-4xl text-2xl py-2 md:pl-10  font-bold'>TaliiKenya</h1>
        <h1 className='text-2xl font-bold mx-20'>+254 727035487</h1>
       
      </div>
      <div className='flex justify-center items-center'>
        <a href=''>
        <AiOutlineMail size={27} className='mx-20'/>
        </a>
        <a href='https://twitter.com/Nisutsa'>
        <BsInstagram size={27}/>
        </a>
        <a href='https://twitter.com/Nisutsa'>
        <BsTwitter size={27} className='mx-20'/>
        </a>
        <a href='https://twitter.com/Nisutsa'>
        <BsWhatsapp size={27}/>
        </a>
      </div>
      <div className='text-center mt-5'>
        <p className='text-lg'>&#169;2023 Talii Kenya</p>
      </div>
    </div>
  )
}

export default Footer
