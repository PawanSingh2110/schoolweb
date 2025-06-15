import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Pricipledesk = () => {
  return (
    <div>
      <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">About</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> About Us <FaArrowRight/> <span className="font-medium "> Principal's Desk</span> </h1>
        
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3">
      <div className="text-start col-span-2 p-4 lg:p-20 order-first xl:order-last">
        <h1 className="text-2xl text-gray-600 font-semibold">Welcome To</h1>
        <h1 className="text-4xl font-semibold text-red-500">Little Scholars</h1>
        <p className=" tracking-wide text-black font-medium mt-4">
          Foundation of every nation is education. The objective of education is
          to prepare the young to educate themselves. It is a continuous life
          long process and school is one of the most important components of
          this process.
        </p>
        <p className=" font-light tracking-wider mt-5">
          Dear Parents & Students, At LITTLE SCHOLARS, Kashipur the task of
          guiding children towards their journey to adulthood is taken up with
          utmost seriousness through strategically and scientifically planned
          steps so that the students and parents relax and enjoy the process of
          becoming lifelong learners. Guiding principles of NCF emphasizes on
          connecting knowledge to life outside school and ensuring learning is
          shifted away from rote methods to allow holistic development of the
          child .Besides the familiar academic areas life skills, thinking
          skills, entrepreneurial skills, sports, creative and performing art
          are a part of the school time table. Teaching methodology is student
          centred and designed to capture attention, interest & concentration.
          Each child has the potential to be the one who can make a difference.
          Given appropriate support, guidance and opportunity they can create
          magic that will astonish us. At LITTLE SCHOLARS each child is provided
          with opportunity to realize his/her potential. We work towards shaping
          self confident individuals. Self confidence has three components i.e.
          having skills, feeling appreciated and being responsible. Our children
          will be enabled to transform knowledge (what they know) and attitudes
          (what they feel and believe) into action (what to do and how to do).
          Our focus is on students acquiring precision in use of language,
          refined gentle manners, ability to appreciate culture, power and habit
          of reflection and efficiency to perform. Education is about the total
          configuration of ideas, practices and conduct. Schools ought to be a
          breathing place, providing real meaning of life for students. We
          continuously strive to achieve this and get better and better every
          day in every way.
        </p>
      </div>
      <div className="  col-span-1 order-last xl:order-first p-5 lg:p-10 ">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww"
          alt="" className="rounded-xl lg:w-[350px] lg:ml-40 xl:ml-0 xl:float-left xl:mt-20 2xl:mt-10 xl:w-[450px]"
        />
      </div>
    </div>
    </div>
  );
};

export default Pricipledesk;
