import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./StudentHandbook.css";

const StudentHandbook = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="title w-full h-48 py-10 text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center">
          Students Handbook
        </h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> News & Calendar <FaArrowRight />{" "}
          <span className="font-medium"> Students Handbook</span>
        </h1>
      </div>

      <main class="container mx-auto py-8">
        <h1 class="text-4xl font-semibold mb-4 uppercase">
          Event and Activity Participation Forms Hub
        </h1>
        <div className="w-20 h-1 bg-gray-800 mb-8"></div>
        <a href="#" class=" font-bold underline block student-handbook mb-28">
          <FaArrowAltCircleRight className=" text-red-500 mr-2 right-arrow" />
          Students Handbook 2024-25
        </a>
        <p class="mb-6 text-left">
          This page offers instant updates on the latest upcoming events and is
          designed to streamline the registration process, making it easy for
          students and parents to sign up for various exciting <br /> happenings
          at our school.
        </p>

        <table class="min-w-full bg-white shadow-md rounded-lg border">
          <thead>
            <tr class=" text-gray-600 uppercase text-xl leading-normal border ">
              <th class="py-3 px-6 text-left font-semibold">Sl. No.</th>
              <th class="py-3 px-6 text-left font-semibold">Forms</th>
              <th class="py-3 px-6 text-left font-semibold">Apply</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            <tr class="border-b border-gray-200 hover:bg-gray-200 p-4 text-xl">
              <td class="py-3 px-6 text-left whitespace-nowrap">1</td>
              <td class="py-3 px-6 text-left">Summer Camp Consent</td>
              <td class="py-3 px-6 text-left">
                <FaArrowAltCircleRight className=" text-red-500 mr-2 right-arrow" />
                <a href="#" class=" font-bold">
                  fill
                </a>
              </td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-200 p-4 text-xl">
              <td class="py-3 px-6 text-left whitespace-nowrap">2</td>
              <td class="py-3 px-6 text-left">Summer Camp (open for all)</td>
              <td class="py-3 px-6 text-left">
                <FaArrowAltCircleRight className=" text-red-500 mr-2 right-arrow" />

                <a href="#" class=" font-bold">
                  fill
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default StudentHandbook;
