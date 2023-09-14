import React from 'react'
import Leopard from '../assets/Leopard.jpg'
import blackRhino from '../assets/blackRhino.jpg'
import elephat from '../assets/elephat.jpg'

const ExploreData = () => {
  return (
  <div className= 'flex flex-row max-md:flex-col justify-center items-center'>
      <div className='max-w-sm h-[580px] rounded overflow-hidden shadow-lg mr-5'>
        <img src={Leopard} alt="" className='w-full' />
        
        <div className='px-6 py-4 bg-gray-300'>
          <div className=" md-2">
            <h1 className ='font-bold text-xl mb-2'>The Leopard | Maasai Mara </h1>
            <p>The Leopard can be seen from one of the Maasai Mara Camps. 
              Some of them  include Encounter Mara, Sala's Camp, Offbeat Ndoto,
              BaseCamp Leopard Hill, Kicheche Bush Camp, Laikipia Wilderness and Naibosho camp.
            </p>
          </div>

          <button className ='bg-[#173317] text-white rounded py-2 px-16 mt-4 text-center'><a href='#'>Learn More</a></button>
        </div>
      </div>

      <div className='max-w-sm h-[580px] rounded overflow-hidden shadow-lg mr-5'>
        <img src={elephat} alt="" className='w-full' />
        <div className='px-6 py-4 bg-gray-300'>
          <div className=" md-2">
            <h1 className ='font-bold text-xl mb-2'>The Elephant | Tsavo  </h1>
            <p>Elephats can be found in Amboseli National Park, Chyulu hills in Tsavo West National park, Samburu 
              national park, Lewa wildlife conservancy, Masai Mara and David Sheldrick Wildlife Trust. The David Shedrick 
              Wildlife Trust is located in Nairobi National Park.
            </p>
          </div>

          <button className ='bg-[#173317] text-white rounded py-2 px-16 mt-4 text-center'><a href='#'>Learn More</a></button>
        </div>
      </div>

      <div className='max-w-sm h-[580px] rounded overflow-hidden shadow-lg'>
        <img src={blackRhino} alt="" className='w-full' />
        <div className='px-6 py-4 bg-gray-300'>
          <div className=" md-2">
            <h1 className ='font-bold text-xl mb-2'>Black Rhino | Meru National Park </h1>
            <p>Meru National Park has a thriving black rhino sanctuary. 
            The Borana, Lewa, Ol Pejeta and Solio conservancies all have stable, breeding populations.
            Nairobi National Park and Saruni Rhino Camp in the Sera Conservancy in northern Kenya also have black rhinos.
            </p>
          </div>

          <button className ='bg-[#173317] text-white rounded py-2 px-16 mt-4 text-center'><a href='#'>Learn More</a></button>        
        </div>
      </div>

      
    </div>
  )
}

export default ExploreData
