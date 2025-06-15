import React from 'react'
import { useState , useEffect } from "react";
import './component.css';
import { NavLink } from "react-router-dom";
import Image from '../images/school_image.jpeg';
import Image2 from '../images/videoimg1.jpg';
import Image3 from '../images/Mediaimg1.jpg';
const Gallery = () => {
  const [value, setValue] = useState("Photodata");
        

  return (
<section className="bg-silverlight relative w-full  py-12 gap-y-8">
<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
  <div className="mb-16">
    <div className="relative">
    <div className=' mt-10'>
      <h1 className='lg:text-5xl text-black text-3xl font-bold '>Our Gallery
      </h1>
      <hr className='border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3' />

      </div>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 mb-8">
    <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
      <li>
        <button className={`${ value ==="Photodata" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm":"button bg-transparent text-black border-none"} `} onClick={()=>setValue("Photodata")}> Photo Album</button>
      </li>
      <li>
        <button className={`${ value ==="Videodata" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm":"button bg-transparent text-black border-none"} `} onClick={()=>setValue("Videodata")} >Video Album</button>
      </li>
      <li>
        <button className={`${ value ==="Mediadata" ? "border-2 tracking-wide py-2 px-6 overflow-hidden text-white bg-[#202C45] rounded-sm":"button bg-transparent text-black border-none"} `} onClick={()=>setValue("Mediadata")}>Media Album</button>
      </li>
    </ul>
  </div>
 
    { value === "Photodata" ?(
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src="https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Cultural Day - 25th July</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src="https://images.unsplash.com/photo-1643321445548-d9c645336d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Harela Celebration 2024</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src="https://images.unsplash.com/photo-1549995546-87cb41aa98a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYSUyMGNsYXNzfGVufDB8fDB8fHww" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Yoga Day 2024</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src="https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Activity: Understanding ..</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src="https://images.unsplash.com/photo-1601057943570-ec0e0dc830bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Safety Week Day 2 - Eye .. </figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src="https://images.unsplash.com/photo-1600787711501-055418c157c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Safety Week Day 1 - Cyber  ..</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src="https://images.unsplash.com/photo-1578593139862-d9b9d9693d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3MlMjB0b3BwZXJzfGVufDB8fDB8fHww" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">CONGRATULATIONS THE TOPPERS ...</figcaption>
      </a>
      <a 
        className="w-full h-full flex flex-col"
        href="#"
      >
        <img src={Image} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">Principal of Little Scholars ..</figcaption>
      </a>
    
      </div>
    ):value === "Videodata" ?(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
        <img src="https://images.unsplash.com/photo-1578593139862-d9b9d9693d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3MlMjB0b3BwZXJzfGVufDB8fDB8fHww" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">MOTHER'S DAY</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">MOTHER'S DAY</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
        <img src="https://images.unsplash.com/photo-1600787711501-055418c157c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">LSMUN_2024</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">MOTHER'S DAY</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
        <img src="https://images.unsplash.com/photo-1549995546-87cb41aa98a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYSUyMGNsYXNzfGVufDB8fDB8fHww" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">LSMUN_2024</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image2} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">MOTHER'S DAY</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
        <img src="https://images.unsplash.com/photo-1643321445548-d9c645336d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
        <figcaption className="mt-2 text-sm sm:text-base">LSMUN_2024</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src="https://images.unsplash.com/photo-1722218530021-aa1dfba50fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">LSMUN_2024</figcaption>
        </a>
        </div>
    ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final .</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>

        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        <a 
          className="w-full h-full flex flex-col"
          href="#"
        >
          <img src={Image3} alt="Gallery Image" className="w-full h-48 border-0 object-cover" />
          <figcaption className="mt-2 text-sm sm:text-base">"Success is not final,</figcaption>
        </a>
        </div>
    )}
  
  <div className='flex items-center justify-center mt-8 mb-14'>
  <NavLink  className='rounded-[6px] tracking-wider px-6 py-3.5 overflow-hidden transition-all duration-200 ease-in-out bg-[#F2184F] border-[#F2184F] text-white text-sm sm:text-base' to="/About" >
  View More
   </NavLink>
  </div>
</div>
</section>
  )
}

export default Gallery