import React, {useState, useEffect} from 'react'
import {BsChevronLeft, BsChevronRight, BsSliders } from "react-icons/bs";
import {GoDotFill} from 'react-icons/go' 
import Navbar1 from '../assets/Navbar1.jpg'
import Navbar2 from '../assets/Navbar2.jpg'
import Navbar3 from '../assets/Navbar3.jpg'
import Navbar4 from '../assets/Navbar4.jpg'
import Navbar5 from '../assets/Navbar5.jpg'
import Navbar6 from '../assets/Navbar6.jpg'

const slides = [
  {
    title: 'Read on the vast wildlife Preserves',
    Description: 'Amboseli || Arbedares || Samburu',
    url: Navbar4,

},
{
  title: 'The great wildbeast Migration',
  Description: 'Maasai Mara Game Reserve',
  url: Navbar1
},
{
  title: 'Learn about Animal Ophanages',
  Description: 'Girrafe Center || Bomas of Kenya || Nairobi National Park',
  url: Navbar3

},
{
  title: 'Learn of the enjoyable hiking areas',
  Description: 'Mt. Longonot || Mt. Kenya || Ngong Hills',
  url: Navbar2
},
{
  title: 'Beach Views along Indian Ocean',
  Description: 'Lamu || Kilifi || Mombasa',
  url: Navbar5
}, 
{
  title: 'Know about the Kenyan Culture',
  Description: 'The Maasai Dance ',
  url: Navbar6

}
] 

const Header = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
  const interval = setInterval(() => {
   nextSlide();
    }, 5000); // 5000 milliseconds (5 seconds)

    return () => {
     clearInterval(interval);
   };
  }, []);


  return (
    <div className ='group max-w-[1400px] h-[600px] w-full m-auto '>
      <div style={{backgroundImage :`url(${slides[currentIndex].url})`}}
      className='w-full h-full bg-center bg-cover duration-500'>  
      </div>

      <div className=' flex flex-1 flex-col absolute top-[40%] right-[35%] p-7 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.4)] '>
       <h1 className = 'text-5xl font-bold text-gray-300 mb-4'>{slides[currentIndex].title}</h1>
       <h3 className='text-3xl font-bold text-gray-400 text-center'>{slides[currentIndex].Description}</h3>
        </div>



      <div className= 'hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-white text-2xl rounded-full p-4 bg-black/60 cursor-pointer'>
      <BsChevronLeft onClick={prevSlide} size={35}/>
      </div>
      <div  className= 'hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-white  text-2xl rounded-full p-4 bg-black/60 cursor-pointer'>
      <BsChevronRight onClick = {nextSlide} size={35}  />
      </div>
      <div className= 'flex top-4 -translate-x-0 translate-y-[-90%] justify-center py-2'>
      {slides.map((slides, slideIndex) =>
      <div key={slideIndex} onClick={() =>goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
        <GoDotFill size={35} className ='fill-black/100 hover:fill-black/40'/>
      </div>
      )}
      </div>
    </div> 
  )
}

export default Header
