import React from "react";
import { FaArrowAltCircleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SchoolManagement = () => {
  return (
    <div className="">
      <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">SCHOOL MANAGEMENT</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> About Us <FaArrowRight/> <span className="font-medium ">SCHOOL MANAGEMENT</span> </h1>
        
      </div>
      <div className="p-20">
      <div>
        <div className="mb-20">
          <h1 className="lg:text-4xl text-3xl font-bold ">
            PRINCIPAL & VICE-PRINCIPAL
          </h1>
          <hr className="border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        <div className="flex flex-col items-center gap-1">
        <img src="https://images.unsplash.com/photo-1533919484729-be3fa3fa0325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D" alt=""  className="w-[250px] h-[300px] rounded-md object-cover" />
          <h1 className="text-lg font-medium">Ms. SHIKHA GAUTAM</h1>
            <h1 className="text-red-500 text-xl font-medium">Principal</h1>
            <button className="flex gap-1 items-center text-xl font-medium"><FaArrowAltCircleRight className="text-red-600 text-lg" />About</button>
          </div>
          <div className="flex flex-col items-center gap-1">
          <img src="https://plus.unsplash.com/premium_photo-1661293869113-4e4e5735b62d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className="w-[250px] h-[300px] rounded-md object-cover" />
          <h1 className="text-lg font-medium">Ms. RUMA AGARWAL</h1>
            <h1 className="text-red-500 text-xl font-medium">Vice-Principal</h1>
            <button className="flex gap-1 items-center text-xl font-medium"><FaArrowAltCircleRight className="text-red-600 text-lg"/>About</button>
          </div>
        </div>
      </div>
      {/* //heads */}
      <div className="mt-20">
      <div className="mb-20">
        <h1 className="lg:text-4xl text-3xl font-bold ">Heads</h1>
        <hr className="border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">

      <div className="flex flex-col items-center gap-1">
            <img src="https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0JTIwb2YlMjBtYW58ZW58MHx8MHx8fDA%3D" alt=""  className="w-[250px] h-[300px] rounded-md object-cover" />
            <h1 className="text-lg font-medium">Mr. SUBHASH SHARMA</h1>
            <h1 className="text-red-500 text-xl font-medium">ACADEMIC HEAD</h1>
            <button className="flex gap-1 items-center text-xl font-medium"><FaArrowAltCircleRight className="text-red-600 text-lg"/>About</button>
          </div>

          <div className="flex flex-col items-center gap-1">
            <img src="https://images.unsplash.com/photo-1664176702106-4196b5cf06d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt=""  className="w-[250px] h-[300px] rounded-md object-cover"/>
            <h1 className="text-lg font-medium">Ms. KAMNA CHHABRA</h1>
            <h1 className="text-red-500 text-xl font-medium">CO-CURRICULAR HEAD</h1>
            <button className="flex gap-1 items-center text-xl font-medium"><FaArrowAltCircleRight className="text-red-600 text-lg"/>About</button>
          </div>

          <div className="flex flex-col items-center gap-1">
            <img src="https://media.istockphoto.com/id/174231700/photo/handsome-business-leader.jpg?s=2048x2048&w=is&k=20&c=TW6Vl7d5FavdjS3IoDIK0V6dMyib4bG5hQYspj_1JHs=" alt=""  className="w-[250px] h-[300px] rounded-md object-cover"/>
            <h1 className="text-lg font-medium">Mr. MANISH CHANDRA SHARMA</h1>
            <h1 className="text-red-500 text-xl font-medium">ICT HEAD</h1>
            <button className="flex gap-1 items-center text-xl font-medium"><FaArrowAltCircleRight className="text-red-600 text-lg"/>About</button>
          </div>


          <div className="flex flex-col items-center gap-1">
            <img src="https://media.istockphoto.com/id/1477080051/photo/man-entrepreneur-and-face-success-in-workplace-and-professional-mindset-at-startup-in.jpg?s=2048x2048&w=is&k=20&c=lIxl9IiyiqcfsDM_o-ejjd50N4adeF3mxiQLditJ100=" alt=""  className="w-[250px] h-[300px] rounded-md object-cover"/>
            <h1 className="text-lg font-medium">Mr. KAPIL KUMAR VISHNOI</h1>
            <h1 className="text-red-500 text-xl font-medium">HR HEAD</h1>
            <button className="flex gap-1 items-center text-xl font-medium"><FaArrowAltCircleRight className="text-red-600 text-lg"/>About</button>
          </div>


          <div className="flex flex-col items-center gap-1">
            <img src="https://images.unsplash.com/photo-1670025386291-ed763877fa87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt=""  className="w-[250px] h-[300px] rounded-md object-cover"/>
            <h1 className="text-lg font-medium">Mr. GOPAL SINGH BISHT</h1>
            <h1 className="text-red-500 text-xl font-medium">Sport-Head</h1>
            <button className="flex gap-1 items-center text-xl font-medium"><FaArrowAltCircleRight className="text-red-600 text-lg"/>About</button>
          </div>



      </div>

      </div>
      </div>
    </div>
  );
};

export default SchoolManagement;
