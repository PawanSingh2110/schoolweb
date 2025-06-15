import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Student = () => {
  return (
    <>
      <div className=" title w-full h-48 py-10  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">About</h1>
        <h1 className="text-center font-bold mt-5 flex flex-wrap items-center gap-1 justify-center">
          Home <FaArrowRight /> Student Life <FaArrowRight />
          <span className="font-medium "> Student Council Form </span>
        </h1>
      </div>

      <div className=" xl:m-20 max-xl:m-3">
        <h1 className="text-4xl text-[#333333] mb-7 font-medium">
          Student Council Guidelines
        </h1>
        <div>
          <h2 className="text-2xl font-medium">
            1. Introduction to council body
          </h2>
          <p className="font-extralight mb-10">
            Student Council assists in planning and development of various
            cultural, sports, social, recreational and other educational
            interests of students in the institution in collaboration with
            school administration. The Student council provides scope to
            contribute in the development of students' leadership skills,
            program planning and volunteering.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium">2. Eligibility</h2>
          <ol className="ml-5 font-extralight">
            <li className="mb-2">
              a. All the bonafide students on the rolls of the institution are
              eligible to be nominated.
            </li>
            <li>
              b. The candidate shall not have been subjected to any disciplinary
              action by the school authorities.
            </li>
          </ol>
        </div>

        <div className="my-10 font-extralight">
          <h3 className="text-xl font-normal">
            Procedure to apply for candidature form
          </h3>
          <p className="py-2">
            There will be four phases to enter into the Student Council:
          </p>
          <p className="py-2">
            Applying for the post- Interested candidates may download the
            admission form from school’s website.{" "}
            <span className='text-[#202C45] font-medium'>(http://littlescholars-kashipur.com)</span>, fill it and
            submit it to the concerned authorities.
          </p>
          <p className="py-2">
            Secondly, there will be Public Speaking Round wherein the candidates
            will be presenting their candidature in front of the students and
            teachers.
          </p>
          <p className="py-2">
            Thirdly, shortlisted candidates will have to go through an interview
            round with an interview panel including members of school
            management.
          </p>
          <p className="py-2">
            Lastly, candidates will be selected on the basis of the
            aforementioned phases and the final decision will be taken by the
            school authorities which would be intact.
          </p>

          <h3 className="font-normal mt-5">
            Student Council Representative's Responsibilities
          </h3>
          <ol className="ml-5">
            <li className="py-1">
              1. Abide by all the roles and responsibilities of student council.
            </li>
            <li className="py-1">
              2. Keep their assigned homeroom informed of all upcoming events
              and activities.
            </li>
            <li className="py-1">
              3. Act responsibly at all meetings and activities or events that
              take place in the school. He/she is expected to represent Little
              Scholars appropriately.
            </li>
            <li className="py-1">
              4. Contribute time and effort to help make each activity the best
              it can be.
            </li>
            <li className="py-1">
              5. Maintain strong communication between students and school
              administration.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-2">
            Student Council Representative Responsibilities
          </h2>
          <ol
            type="1"
            className="list-decimal list-inside ml-5 font-extralight"
          >
            <li className="py-1">
              Attend all scheduled meetings of council board.
            </li>
            <li className="py-1">
              Solicit input from your classmates. You ARE their representative.
              It is also your job to keep your assigned homeroom informed of all
              upcoming events and activities.
            </li>
            <li className="py-1">
              Act responsibly at all meetings and at all activities or events
              sponsored by the Council. You are expected to represent Little
              Scholars appropriately.
            </li>
            <li className="py-1">
              Contribute time and effort to help make each Student Council
              sponsored activity the best it can be.
            </li>
            <li className="py-1">
              Maintaining strong communication between the students and school
              administration.
            </li>
            <li className="py-1">Student council is a team.</li>
          </ol>
        </div>

        <div className="border-4 border-black max-xl:p-3 xl:p-10 rounded mt-10">
          <h1 className="mb-10 text-2xl font-medium">
            Little Scholars School Student Council Form
          </h1>
          <section>
            <div className="flex flex-col gap-10 md:flex-row">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name of Student"
                className="border-2 w-[100%] h-12 text-lg pl-5"
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Class and Section"
                className="border-2 w-[100%] h-12 text-lg pl-5"
              />
            </div>

            <div className="flex flex-col gap-10 my-7 md:flex-row">
              <input
                type="text"
                name=""
                id=""
                placeholder="Student's Email Address"
                className="border-2 w-[100%] h-12 text-lg pl-5"
              />

              <div className="w-[100%]">
                <select
                  name=""
                  id=""
                  className="border-2 w-[100%] xl:h-7 text-lg pl-5 "
                >
                  <option value="">---- Select ----</option>
                  <option value="">Head Boy</option>
                  <option value="">Head girl</option>
                  <option value="">Editorial head</option>
                  <option value="">Cultural head</option>
                  <option value="">Sports Captain (Boy)</option>
                  <option value="">Sports Captain (Girl)</option>
                  <option value="">House Captain (Girl)</option>
                  <option value="">House Captain (Girl)</option>
                  <option value="">Perfect (House wise)</option>
                </select>
                <p className="text-[#555555] font-light">Choose a Position</p>
              </div>
            </div>

            <div className="flex flex-col gap-10 my-7 md:flex-row">
              <div className="w-[100%]">
                <select
                  name=""
                  id=""
                  className="border-2 w-[100%] h-10 text-lg pl-5 "
                >
                  <option value="">---- Select ----</option>
                  <option value="">Head Boy</option>
                  <option value="">Head girl</option>
                  <option value="">Editorial head</option>
                  <option value="">Cultural head</option>
                  <option value="">Sports Captain (Boy)</option>
                  <option value="">Sports Captain (Girl)</option>
                  <option value="">House Captain (Girl)</option>
                  <option value="">House Captain (Girl)</option>
                  <option value="">Perfect (House wise)</option>
                </select>
                <p className="text-[#555555] font-light">
                  U Can Choose One More Position (*optional)
                </p>
              </div>

              <div className="w-[100%]">
                <select
                  name=""
                  id=""
                  className="border-2 w-[100%] h-10 text-lg pl-5 "
                >
                  <option value="">Blue</option>
                  <option value="">Red</option>
                  <option value="">Green</option>
                  <option value="">Yellow</option>
                </select>
                <p className="text-[#555555] font-light">Select Your House</p>
              </div>
            </div>

            <button className="bg-[#202C45] text-white tracking-tighter px-10 py-4 rounded-full">Submit Now</button>

          </section>
        </div>
      </div>
    </>
  );
};

export default Student;
