import React from "react";
import { BsFillSuitcaseFill, BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaCalendarAlt, FaUserGraduate } from "react-icons/fa";
import { FaPerson, FaSchool } from "react-icons/fa6";

const Events = () => {
  return (
    <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 w-[60%] xl:w-[80%]  mx-auto gap-4 items-center py-10 ">
      <div className="   border-2 flex flex-col items-center rounded-lg border-gray-500 hover:scale-110">
        <FaCalendarAlt size={100} className="p-4 hover:text-red-500" />
        <h1 className=" text-center   font-medium p-1">Events Calendar</h1>
      </div>
      <div className=" p-1  border-2 flex flex-col items-center rounded-lg border-gray-500 hover:scale-110">
        <FaUserGraduate size={100} className="p-4  hover:text-red-500" />

        <h1 className=" text-center   font-medium p-1">Our Alumni</h1>
      </div>
      <div className=" p-1  border-2 flex flex-col items-center rounded-lg border-gray-500 hover:scale-110">
        <BsFillSuitcaseLgFill size={100} className="p-4  hover:text-red-500" />

        <h1 className=" text-center    font-medium p-1">Job Vacancy</h1>
      </div>
      <div className=" p-1  border-2 flex flex-col items-center rounded-lg border-gray-500 hover:scale-110">
        <FaSchool size={100} className="p-4  hover:text-red-500" />

        <h1 className=" text-center   font-medium p-1">School Panorama</h1>
      </div>
      <div className=" p-1  border-2 flex flex-col items-center rounded-lg border-gray-500 hover:scale-110">
        <FaPerson size={100} className="p-4  hover:text-red-500" />

        <h1 className=" text-center   font-medium p-1">Kid's Corner</h1>
      </div>
      <div className=" p-1  border-2 flex flex-col items-center rounded-lg border-gray-500  hover:scale-110">
        <FaCalendarAlt size={100} className="p-4  hover:text-red-500 " />

        <h1 className=" text-center  font-medium p-1">e-Care Login</h1>
      </div>
    </div>
  );
};

export default Events;
