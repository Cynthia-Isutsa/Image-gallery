import React from 'react'
import intro from "../assets/intro.jpg"

const IntroBlog = () => {
  return (
    <div>
      <div className='flex flex-1 mx-5 gap-8 mt-8'>
        <div className=''>
          <img src={intro} alt='introBlog' className= 'w-full h-full' />
        </div>
        <div>
       <h1>Discovering the Beauty and Diversity of Kenya: A Journey Through East Africa's Gem</h1>
        <p>When it comes to awe-inspiring landscapes, vibrant cultures, and unforgettable wildlife encounters,
       few places on Earth can compare to Kenya. Nestled in the heart of East Africa, Kenya is a country 
       that beckons adventurers, nature enthusiasts, and cultural explorers alike. From the iconic savannahs
        of the Maasai Mara to the bustling streets of Nairobi, Kenya offers a tapestry of experiences that captivate the soul.</p>
      </div>
      </div>
    </div>
  )
}

export default IntroBlog
