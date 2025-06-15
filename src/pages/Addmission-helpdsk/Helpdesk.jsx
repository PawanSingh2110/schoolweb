import React from "react";
import "./Helpdesk.css";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";


const Helpdesk = () => {
  return (
    <div>
       <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">Addmissons Enquiry</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> About Us <FaArrowRight/> <span className="font-medium ">Addmissons Enquiry</span> </h1>
        
      </div>
      <div className="Addmision-section">
        <div className="Addmission-bg">
          <div className="m-5">
          <h1 className=" text-3xl font-medium ">Addmissons Enquiry </h1>
          <hr className="border-[3px] border-black rounded-md w-[20%]  lg:w-[15%] xl:w-[6%] mt-3" />
          </div>

          <nav className="breadcrumb">
            <Link to="/">Home</Link> &gt;{" "}
            <Link to="">Addmissions</Link> &gt;{" "}
            <Link to="">Addmissions Enquiry</Link> 
          </nav>
        </div>
      </div>
      <main className="flex justify-center mt-10 ">
        <form className="bg-white shadow-md px-4 pt-6 pb-8 mb-4 ">
          <h2 className="text-2xl  mb-6 text-lef pl-4 f">
            Join Little Scholars: Your Path to Learning and Adventure!
          </h2>
          <p className="text-gray-700 mb-6 text-cente pl-4 p-2 leading-7 tracking-wide">
            The School invites aspiring applicants for admission. If you are a
            keen learner with kindling curiosity and a sense of adventure, then
            the Little Scholars is the place to be.
          </p>
          <div className="mb-4 grid grid-cols-2 gap-7 mx-2 ">
            <div>
              <select
                id="className"
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline "
              >
                <option>-- Choose className ---</option>
                <option value="nursery">PG</option>
                <option value="kg">LKG</option>
                <option value="className1">UKG</option>
                <option value="className2">Nursery</option>
                <option value="className3">&#8544;</option>
                <option value="className4">&#8545;</option>
                <option value="className5">&#8546;</option>
                <option value="className6">&#8547;</option>
                <option value="className7">&#8548;</option>
                <option value="className8">&#8549;</option>
                <option value="className9">&#8550;</option>
                <option value="className10">&#8551;</option>
                <option value="className11">&#8552;</option>
                <option value="className12">&#8553;</option>
                <option value="className12">&#8554;</option>
                <option value="className12">&#8555;</option>
              </select>
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                className=" appearance-none w-full py-4 px-3   text-gray-700 leading-tight focus:outline-none focus:shadow-outline  outline "
              />
            </div>
          </div>
          <div className=" mb-8 grid grid-cols-2 gap-7 mx-2 ">
            <div>
              <input
                id="dob"
                type="date"
                placeholder=" Enter Date of Birth"
                className=" appearance-none w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
            </div>
            <div>
              <input
                id="father_name"
                type="text"
                placeholder=" Enter Father's Name"
                className=" appearance-none w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
            </div>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-7 mx-2 ">
            <div>
              <input
                id="father_name"
                type="text"
                placeholder=" Enter Father's Name"
                className=" appearance-none w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
            </div>
            <div>
              <input
                id="father_name"
                type="text"
                placeholder=" Enter Father's Name"
                className="appearance-none w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
            </div>
          </div>
          <div className="mb-8 mx-2">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className=" appearance-none w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4  mx-2">
            <textarea
              id="address"
              placeholder="Address"
              className=" appearance-none w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-8  mx-2">
            <textarea
              id="remarks"
              placeholder="Remarks"
              className=" appearance-none w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="2"
            ></textarea>
          </div>
          <div className="flex float-left pl-2  justify-center">
            <button
              className="hover:bg-blue-700 text-white  py-4 px-10   focus:outline-none focus:shadow-outline  flex  "
              type="button"
            >
              {" "}
              Submit Now{" "}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Helpdesk;
