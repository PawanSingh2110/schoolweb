import React from "react";
import "./Event.css";
import { FaArrowRight } from "react-icons/fa";

const EventClander = () => {
  return (
    <div>
      <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">
          Events Calendar
        </h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> About Us <FaArrowRight />{" "}
          <span className="font-medium ">Events Calendar</span>{" "}
        </h1>
      </div>
      <div className="px-10 py-16">
        <h1 className="text-4xl text-black font-bold">Events Calendar</h1>
        <hr className=" border-2 border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3" />
      </div>

      <div className="grid grid-cols-3 px-16 mb-10">
        <div class="card-container ">
          <div class="card ">
            <div class="card-front">
              {/* <!-- Front content --> */}
              <h3 className="font-bold text-3xl text-white">2022-2023</h3>
              
            </div>
            <div class="card-back">
              {/* <!-- Back content --> */}
             
              
              <p className="text-black font-bold text-2xl tracking-tighter">THE YEAR OF WORLD CUP LOOSE.</p>
            </div>
          </div>
        </div>
        <div class="card-container ">
          <div class="card ">
            <div class="card-front1">
              {/* <!-- Front content --> */}
              <h3 className="font-bold text-3xl text-white">2023-2024</h3>
              
            </div>
            <div class="card-back1">
              {/* <!-- Back content --> */}
              
              
              <p className="text-black font-bold text-2xl tracking-tighter">THE YEAR OF THE RAM MANDIR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventClander;
