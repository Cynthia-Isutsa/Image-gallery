import React from 'react'
import Navbar1 from '../assets/Navbar1.jpg'

const Header = () => {
  return (
    <div className='flex justify-center align-center'>
      <div>
        <img src={Navbar1} alt='antelope' className= 'relative w-full h-full overflow-hidden ' />
      </div>
    </div>
  )
}

export default Header
