import React from 'react'
import { GiNotebook } from 'react-icons/gi'

const Registration = () => {
  return (
    <div>
      <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">Online Registration</h1>
        {/* <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> About Us <FaArrowRight/> <span className="font-medium "> Principal's Desk</span> </h1> */}
        
      </div>
      <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
        STUDENT REGISTRATION FORM 2024-2025
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/4 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col items-center space-y-4">
        <GiNotebook size={250}  className=" md:w-32 lg:w-40" />
           
          <button className="text-blue-700 text-sm md:text-base underline">
            Click on Application Form For Registration
          </button>
        </div>

        <div className="bg-blue-900 p-6 rounded-lg w-full md:w-1/2 lg:w-1/3">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="text-white">User Name:</label>
              <input
                type="text"
                className="p-2 rounded-md border-2 border-blue-800"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white">Password:</label>
              <input
                type="password"
                className="p-2 rounded-md border-2 border-blue-800"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-white">
                Remember me
              </label>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mt-4">
              Log In
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-gray-600 text-xs md:text-sm">
        <p>I. After Registration, you will receive an SMS of successful registration...</p>
        <p>II. User Name and Password can be used to download the filled application form...</p>
        <p className="font-bold">Note: Admission will be granted only on the availability of seats.</p>
      </div>
    </div>

    </div>
  )
}

export default Registration