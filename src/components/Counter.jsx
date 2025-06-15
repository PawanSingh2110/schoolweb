import React from 'react'
import { useState , useEffect } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const targetValue=1130;
    useEffect(() => {
      if (count < targetValue) {
        const timer = setInterval(() => {
          setCount(prevCount => Math.min(prevCount + 1, targetValue));
        },1);
  
        return () => clearInterval(timer);
      }
    }, [count, targetValue]);

  return (
  <div className="relative bg-[url('https://littlescholars-kashipur.com/images/bg/lsk_slider_1.webp')] bg-cover h-64 w-full mb-14">
  <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-evenly bg-opacity-50 p-4">
    <div className='flex flex-col gap-y-4 text-center md:text-left'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl text-white'>{count}</h1>
      <span className='text-white text-lg sm:text-xl'>Happy Students</span>
    </div>
    <div className='flex flex-col gap-y-4 text-center md:text-left'>
      <h1 className='text-white text-4xl sm:text-5xl md:text-6xl'>65</h1>
      <span className='text-white text-lg sm:text-xl'>Our Staff</span>
    </div>
  </div>
</div>
  )
}

export default Counter