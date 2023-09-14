import React from 'react'
import Cheeter from '../assets/Cheeter.jpg'



const About = () => {
  return (
    <div className = 'flex flex-row max-md:flex-col justify-between items-center ml-12 mr-10 mt-5 mb-10'>
      <div className =''>
        <h2 className='text-4xl font-bold text-[#006400]'>TaliiKenya</h2>

        <h3 className='text-2xl font-bold  text-[#456845] mt-7'>Explore the Beauty of Kenya</h3>

        <p className= 'text-xl mt-4 '>Welcome to utaliiKenya, the site where you get to learn about the fascinating and varied treasures of 
          this lovely East African country, Kenya. Our goal is to lead you on a captivating tour of Kenya's 
          diverse landscape, which includes animals, culture, beaches, the great wildebeest migration, and hiking trails.
           We serve as your portal to the most unforgettable experiences in Kenya.</p>
      </div>

      <div>
        <div className= 'w-full m-10'>
          <img src={Cheeter} alt="Cheeter" className='w-full pr-10' />
        </div>
      </div>
    </div>
  )
}

export default About
