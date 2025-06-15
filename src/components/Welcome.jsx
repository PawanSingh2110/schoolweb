import React from 'react'
import { FaBook } from "react-icons/fa6";

const Welcome = () => {
  return (
    <div className=' w-[85%] mx-auto  '>
    <div className='mt-10'>
    <h1 className='lg:text-4xl text-3xl font-bold '>Welcome to Little Scholars</h1>
      <h1 className='text-xl font-light mt-3'>Service Before Self</h1>
      <hr className='border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3' />
      <p className='text-md lg:text-lg tracking-widest  font-light  lg:w-[95%]  mt-5'>The Little Scholars school is co-educational CBSE affiliated institution and was established in 1983 at Bhalla Farm in Kashipur, U.S.Nagar. At the school, we consider our curriculum from philosophical and eclectic perspective, with a view to develop each individual’s potential to the optimum.</p>
      <p className='text-md lg:text-lg tracking-widest  font-light lg:w-[95%] mt-5'>The school aims at promoting an institution which caters to children without discrimination of caste, colour, creed or status in any respect whatsoever. Indian traditional values are inculcated so that children grow up with awareness of our society and the roots of our culture. Every child is also encouraged to develop sound ethical values and a strong moral fibre to be a worthy member of the world community..</p>
    </div>
    {/* /// grid section o welcome page */}
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:w-[80%] mx-auto mt-5 gap-8'>

        <div className='flex flex-col xl:flex-row items-center gap-5  p-5 xl:p-0 2xl:p-5'>
            <div className='bg-slate-900 xl:mb-14 p-4 rounded-full'>
                <FaBook size={35} className='text-white  ' />

            </div>
            <div className='text-center xl:text-start'>
                <h1 className='text-2xl font-normal'>Established Legacy</h1>
                <p className='lg:text-lg font-light tracking-widest 2xl:w-[70%] mt-5 lg:mt-0'>Founded in 1983 in Kashipur, U.S.Nagar, Little Scholars School has a rich legacy in quality education.</p>

            </div>
        </div>

        <div className='flex flex-col xl:flex-row items-center gap-5  p-5 xl:p-0 2xl:p-5'>
        <div className='bg-slate-900 xl:mb-14 p-4 rounded-full'>
        <FaBook size={35} className='text-white  ' />

            </div>
            <div className='text-center xl:text-start'>
                <h1 className='text-2xl font-normal'>Philosophical Curriculum</h1>
                <p className='lg:text-lg font-light tracking-widest 2xl:w-[70%] mt-5 lg:mt-0'>Founded in 1983 in Kashipur, U.S.Nagar, Little Scholars School has a rich legacy in quality education.</p>

            </div>
        </div>
        <div className='flex flex-col xl:flex-row items-center gap-5  p-5 xl:p-0 2xl:p-5 '>
        <div className='bg-slate-900 xl:mb-14 p-4 rounded-full'>
        <FaBook size={35} className='text-white  ' />

            </div>
            <div className='text-center xl:text-start'>
                <h1 className='text-2xl font-normal'>Inclusive Education</h1>
                <p className='lg:text-lg font-light tracking-widest 2xl:w-[70%] mt-5 lg:mt-0'>Founded in 1983 in Kashipur, U.S.Nagar, Little Scholars School has a rich legacy in quality education.</p>

            </div>
        </div>
        <div className='flex flex-col xl:flex-row items-center gap-5  p-5 xl:p-0 2xl:p-5'>
        <div className='bg-slate-900 xl:mb-14 p-4 rounded-full'>
        <FaBook size={35} className='text-white  ' />

            </div>
            <div className='text-center xl:text-start'>
                <h1 className=' text-2xl font-normal'>Cultural Roots and Values</h1>
                <p className='lg:text-lg font-light tracking-widest 2xl:w-[70%] mt-5 lg:mt-0'>Founded in 1983 in Kashipur, U.S.Nagar, Little Scholars School has a rich legacy in quality education.</p>

            </div>
        </div>



    </div>





    </div>
  )
}

export default Welcome
