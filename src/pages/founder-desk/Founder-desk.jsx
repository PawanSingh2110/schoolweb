import React from "react";
import { Link } from "react-router-dom";
import bg from "../images/bg1.jpg";
import p6 from "../images/p6.png";
import founder from "../images/r.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Founderdesk = () => {
  return (
    <>
      <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">About</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> About Us <FaArrowRight/> <span className="font-medium "> Founder's Desk</span> </h1>
      </div>

      <div className="h-auto" style={{ backgroundImage: `url(${p6})` }}>
        <div className="p-5 flex flex-col-reverse gap-10 items-center xl:flex-row xl:p-20">
          <div className="max-w-4xl">
            <p className="text-gray-500 text-2xl font-semibold">Welcome To</p>
            <p className="text-red-600 text-3xl font-medium">Little Scholars</p>
            <p className="py-5 font-medium">
              Little Scholars is a journey of self-discovery for a child as they
              grow to become young adults. The school will equip him to excel in
              academics, and to be savvy in through a Hybrid learning platform.
            </p>
            <p className="font-extralight">
              The student will be encouraged to discover their interests,
              talents and aptitudes, and learn to form their opinions and role
              in society. This is achieved in a nurturing environment, where the
              Mentor enacts the role of a Second Parent. An important feature of
              this process is the school’s provision of rich choices, be they in
              courses of academics, co-curricular activities in artistic,
              creative and intellectual activities, and in sports and adventure.
              Engagements with ecology and heritage allow engagements with the
              community, within the school, in rural areas, or through NGOs,
              nurturing the ideologies of the school motto ‘Service before
              self’. Leadership abilities to take decisions and to find
              solutions are imbibed on the sports field, through social
              interactions, and through positions of responsibility provided in
              school, aiming not just to nurture the students through their
              formative years, but also to place them on a continuous curiosity
              to learn, while carrying the responsibilities of leader with
              understanding, intelligence, sensitivity and an inclusive
              attitude.
            </p>
          </div>

          <div>
            <img src={founder} alt="image" className=" w-[100%] h-auto border-4 border-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Founderdesk;
