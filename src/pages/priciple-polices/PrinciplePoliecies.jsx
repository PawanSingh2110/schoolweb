import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const PrinciplePoliecies = () => {
  const [select, setSelect] = useState("primary");
  return (
    <div>
        <div className=" title w-full h-48 py-10   text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">Principal and Policies</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> About Us <FaArrowRight/> <span className="font-medium ">  Principal and Policies</span> </h1>
        
      </div>
      <div class="bg-gray-100 p-8  ">
      
      <div class="flex flex-col lg:flex-row mt-5">
        {/* <!-- Sidebar --> */}
        <div class="lg:w-2/4 xl:w-1/4 tracking-tighter xl:h-[390px] 2xl:h-[370px] bg-white rounded-lg shadow-md p-4 lg:sticky top-0 h-[370px] w-full">
          <ul class="space-y-2">
            <li>
              <a
                href="#behave"
                class="block py-2 px-4 rounded hover:bg-gray-200 font-semibold text-gray-700"
              >
                Behaviour/code of conduct
              </a>
            </li>
            <li>
              <a
                href="#lib"
                class="block py-2 px-4 rounded hover:bg-gray-200 font-semibold text-gray-700"
              >
                Library
              </a>
            </li>
            <li>
              <a
                href="#transport"
                class="block py-2 px-4 rounded hover:bg-gray-200 font-semibold text-gray-700"
              >
                Transport Rules
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 rounded hover:bg-gray-200 font-semibold text-gray-700"
              >
                School Uniform
              </a>
            </li>
            <li>
              <a
                href="#house"
                class="block py-2 px-4 rounded hover:bg-gray-200 font-semibold text-gray-700"
              >
                House System
              </a>
            </li>
            <li>
              <a
                href="#withdrawl"
                class="block py-2 px-4 rounded hover:bg-gray-200 font-semibold text-gray-700"
              >
                Withdrawal from School
              </a>
            </li>
            <li>
              <a
                href="#facltly"
                class="block py-2 px-4 rounded hover:bg-gray-200 font-semibold text-gray-700"
              >
                Faculty
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Content --> */}
        <div class="lg:w-3/4 w-full mt-8 lg:mt-0   lg:ml-8">
          <div id="behave">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">
              Behaviour/code of conduct
            </h1>
            <div class="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Students working"
                class="rounded-lg w-full"
              />
              <p class="mt-4 text-gray-700">
                Behaviour/code of conduct Pic of students lsk Students must be
                punctual and regular to school. Leave of absence must be applied
                for. No student shall leave the School premises during the
                School hours without prior permission of the Principal.Honesty,
                cleanliness of dress and loyalty to School are demanded and
                expected to each student. <br /> <br /> A student should be
                habitually clean and neatly dressed. The School uniform is to be
                worn on all days. Immorality, insubordination, ragging of any
                kind, contempt of authority or wilful damage to property will be
                a sufficient reason for immediate expulsion of the student and
                are responsible for all School property.
                <br /> <br /> Money should not be lent or borrowed by the
                student and articles should not be exchanged between the
                students. Students are not allowed to wear jewellery or bring
                valuables to school. Students are admitted in the School at
                their own risk. The School will not be responsible for any
                injury or loss of books, stationery or any other article.
                <br /> <br /> They are not allowed to bring mobile phone to
                school. No reading materials (other than prescribed text books)
                should be brought to School without permission. The School
                reserves the right to advise the parents to withdraw their child
                if his/her progress in studies is unsatisfactory or his/her
                attendance is irregular or his/her conduct is harmful to other
                students.
              </p>
            </div>
          </div>

          <div id="lib">
            <h1 class="text-2xl font-bold text-gray-800 mt-10 mb-4">Library</h1>
            <div class="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Students working"
                class="rounded-lg w-full"
              />
              <p class="mt-4 text-gray-700">
                Students must maintain absolute silence in the library. Students
                are expected to handle the library books with care. Books
                marked, disfigured or damaged will have to be replaced or paid
                by the borrower. For the loss of a book, the market price will
                be charged. Text books, magazines and reference books will not
                be issued
              </p>
            </div>
          </div>

          <div id="transport">
            <h1 class="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Transport Rules
            </h1>
            <div class="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://images.unsplash.com/photo-1536693354796-0d3cfdd4e68d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYW5zcG9ydCUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Students working"
                class="rounded-lg w-full"
              />
              <p class="mt-4 text-gray-700">
                The school bus service is available for all students on specific
                routes. Bus drivers are authorized to stop the bus only at
                designated stops. Routes and stops are approved by the school
                and parents must survey the route prior to selecting a bus stop.
                The list of stops is made keeping in view the convenience and
                safety of all bus commuters and no diversion/extension will be
                entertained on existing routes. Bus fees will be paid by parents
                as per fee rules. At the end of the Academic Session, i.e. by
                31st March, parents must apply in writing for withdraw from bus
                if required, failing which bus fee will be charged from April,
                as per approved rates.
                <br />
                <br />
                Students are expected to behave in a courteous manner in the bus
                and should not throw trash/food inside or outside the bus. In
                case of any emergency, parents must contact the School office,
                which will take the necessary action in contacting the person in
                charge of a particular bus
              </p>
            </div>
          </div>

          <div id="house">
            <h1 class="text-2xl font-bold text-gray-800 mt-10 mb-4">
              House System
            </h1>
            <div class="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://images.unsplash.com/photo-1512253022256-19f4cb92a4dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9vbCUyMGhvdXNlJTIwc3lzdGVtfGVufDB8fDB8fHww"
                alt="Students working"
                class="rounded-lg w-full"
              />
              <p class="mt-4 text-gray-700">
                The students of classes II to XII are members of houses allotted
                to them. The house system plays an important role in promoting
                the cultural and co-curricular activities of the school. The
                houses conduct functions to celebrate important days and events.
                Inter-House competitions are periodically conducted to motivate
                students to take part in debates, declamations and other
                activities. Besides this, the students play inter-house matches
                in team games- Cricket, Basketball, football volleyball,
                athletics etc
                <br />
                <br />
              </p>
            </div>
          </div>

          <div id="withdrawl">
            <h1 class="text-2xl font-bold text-gray-800 mt-10 mb-4">
              Withdrawal from School
            </h1>
            <div class="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://media.istockphoto.com/id/988557346/photo/locker-room.jpg?s=2048x2048&w=is&k=20&c=I55-uQA3zvMdGiTG6SmiosmVWCrteU0dGIU6XwfpkZo="
                alt="Students working"
                class="rounded-lg w-full"
              />
              <p class="mt-4 text-gray-700">
                Any parent withdrawing his/her child for whatever reason must
                serve one month’s notice, failing which the child’s security
                money will be adjusted against fees for the period of
                non-attendance till issue of T.C. Withdrawal of any student is
                possible only after the concerned parents/guardian officially
                fills and submits a withdrawal from available in the school
                office. NOC from concerned departments must be obtained by the
                student which is to be countered signed by PRINCIPAL.
                <br />
                <br />
                Any child whose attendance falls below 75% till December, for
                classes IX – XII will not be allowed to appear for the final
                examinations in accordance with the CBSE rules. Any child short
                of this attendance will require special permission from the CBSE
                which will have to be obtained by the parent
              </p>
            </div>
          </div>

          {/* ///teacher and factly */}

          <div id="facltly">
            <h1 class="text-2xl font-bold text-gray-800 mt-10 mb-4">Faculty</h1>
            <div class="bg-white rounded-lg shadow-md p-4">
              <p>
                The School is in the process of implementing the New Education
                Policy (NEP – 2020) in a phased manner. The ‘10 + 2’ structure
                will be replaced with the ‘5+3+3+4’ model.
              </p>

              <div className="grid grid-cols-2 xl:grid-cols-5 gap-5 mt-4">
                <button
                  className={` px-3 py-1 rounded-lg ${
                    select === "primary"
                      ? " text-white  border-black bg-slate-950"
                      : "text-black"
                  }`}
                  onClick={() => setSelect("primary")}
                >
                  Primary Foundation{" "}
                </button>
                <button
                  className={` px-3 py-1 rounded-lg ${
                    select === "junior"
                      ? "text-white bg-slate-950 border-black"
                      : "text-black"
                  }`}
                  onClick={() => setSelect("junior")}
                >
                  Junior Fondation
                </button>
                <button
                  className={`px-3 py-1 rounded-lg ${
                    select === "middle"
                      ? "text-white bg-slate-950 border-black"
                      : "text-black"
                  }`}
                  onClick={() => setSelect("middle")}
                >
                  Middle stage{" "}
                </button>
                <button
                  className={` px-3 py-1 rounded-lg ${
                    select === "secondary"
                      ? "text-white bg-slate-950 border-black"
                      : "text-black"
                  }`}
                  onClick={() => setSelect("secondary")}
                >
                  {" "}
                  Secondary Foundation
                </button>
              </div>
              <div className="mt-5">
                {select === "primary" && (
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="primary"
                      className="w-full rounded-lg"
                    />
                    <p className="mt-5">
                      Comprising of 5 years, Pre-nursery to II, the Foundation
                      Level delivers a holistic, fun filled, stress-free,
                      uniform, child centred, learning where the student would
                      have the freedom and choice to learn according to their
                      intelligences, aptitude, talent and interest. Learning
                      would include activity and discovery based learning while,
                      with the challenges of the 21st century where expression
                      of ideas takes centre stage, communication skills,
                      critical thinking, creativity, collaboration and character
                      building will be given equal importance. Reading and
                      writing is integrated with indoor and outdoor games,
                      sketching, colouring, singing and dancing making learning
                      fun, pleasurable and a collaborative experience.
                    </p>
                    <h1 class="text-2xl font-bold text-gray-800 mt-10 mb-4">
                      Teacher & Staff
                    </h1>
                    <hr className="border-2 mt-2 mb-4" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-10">
                      <div className="text-center  ">
                        <img
                          src="https://media.istockphoto.com/id/1330255708/photo/portrait-of-smiling-teacher-in-school-corridor-with-books-in-hand.jpg?s=1024x1024&w=is&k=20&c=OnRShZVO9nnsF8OlrijZiLh-WopN0e6lU9PdcDoA9mw="
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ASHA NEGI
                        </h1>
                      </div>

                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/anuradha.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ANURADHA BHARDWAJ
                        </h1>
                      </div>

                      <div className="text-center ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/beena_joshi.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. BEENA JOSHI
                        </h1>
                      </div>

                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/ankita_tandon.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ANKITA TANDON
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/parul.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. PARUL AGARWAL
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5">
                {select === "junior" && (
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="junior"
                      className="w-full rounded-lg"
                    />
                    <p className="mt-5">
                      Comprising of 3 years, classes VI to VIII, the Preparatory
                      level focuses reducing the burden of curriculum and
                      increase the scope and depth of learning. Activity and
                      discovery based learning shall continue to be the prime
                      focus while communication skills, critical thinking,
                      creativity, collaboration and character building will be
                      given equal importance The focus of the syllabus will be
                      on key concepts and ideas which will not only reduce
                      academic stress but also free the teachers to focus on
                      conceptual understanding and higher order thinking skills,
                      thus making the shift from content to competencies. With
                      the growing availability of information and technology,
                      students will be inclined towards plagiarism by
                      representing, intentionally or unintentionally ideas,
                      words or work of another person. Ownership of ones work
                      and ideas will be given its due importance.
                    </p>
                    <h1 class="text-2xl font-bold text-gray-800 mt-10 mb-4">
                      Teacher & Staff
                    </h1>
                    <hr className="border-2 mt-2 mb-4" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-10">
                      <div className="text-center  ">
                        <img
                          src="https://media.istockphoto.com/id/1330255708/photo/portrait-of-smiling-teacher-in-school-corridor-with-books-in-hand.jpg?s=1024x1024&w=is&k=20&c=OnRShZVO9nnsF8OlrijZiLh-WopN0e6lU9PdcDoA9mw="
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ASHA NEGI
                        </h1>
                      </div>

                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/priya_purkait.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. PRIYA PURKAIT
                        </h1>
                      </div>

                      <div className="text-center ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/nupur_sharma_joshi.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. NUPUR SHARMA JOSHI
                        </h1>
                      </div>

                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/shobha_nautiyal.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. SHOBHA NAUTIYAL
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/jasleen_arora.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. JASLEEN ARORA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/suman_negi.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. SUMAN NEGI
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/anju_sharma.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ANJU SHARMA
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5">
                {select === "middle" && (
                  <div>
                    <img
                      src="https://littlescholars-kashipur.com/images/pandp/Pic_of_Library.webp"
                      alt="middle"
                      className="w-full rounded-lg"
                    />
                    <p className="mt-5">
                      While the students are facing he changes due to
                      adolescence, students shall be introduced to Experiential
                      Learning by engaging in hands-on experience and reflection
                      which would help them to connect with theories and
                      knowledge learned in the classroom to real-world
                      situations. Experiential learning opportunities will be
                      introduced through course and non-course based forms
                      through community service enabling them to apply their
                      classroom learning to practice. The student will be
                      encouraged to understand the principle of academic
                      integrity and how knowledge is constructed and to develop
                      their own thinking while showing an honest behavior by
                      giving credit where credit is due. Technical skills of
                      referencing are important and will be inculcated in the
                      student to master these techniques during their learning
                      journey which will deter the student from Plagiarism,
                      knowing or unknowingly{" "}
                    </p>
                    <h1 class="text-2xl font-bold text-gray-800 mt-10 mb-4">
                      Teacher & Staff
                    </h1>
                    <hr className="border-2 mt-2 mb-4" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-10">
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/asha_dhoundiyal.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ASHA NEGI
                        </h1>
                      </div>

                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/diviya_arora.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. PRIYA PURKAIT
                        </h1>
                      </div>

                      <div className="text-center ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/neelam_aneja.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. NUPUR SHARMA JOSHI
                        </h1>
                      </div>

                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/manjula_arora.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. SHOBHA NAUTIYAL
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/babita_punetha.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. JASLEEN ARORA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/saroj_singh.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. SUMAN NEGI
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/rashmi_agarwal.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ANJU SHARMA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/anju_sharma_kukrety.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. RENU TRIPATHI
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/renu_tripathi.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. IQBAL KAUR LUTHRA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/ruchi_manral.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. RUCHI MANRAL
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5">
                {select === "secondary" && (
                  <div>
                    <img
                      src="https://littlescholars-kashipur.com/images/pandp/Pic_of_students.webp"
                      alt="middle"
                      className="w-full rounded-lg"
                    />
                    <p className="mt-5">
                      Community Engaged Learning with the academic infusion,
                      Projects based on real-life situations in group or in
                      individual capacity, concluding in generating solutions
                      inviting critical thinking shall be the basis of
                      assessment of classroom to real-world solutions.
                      Individual career based Exploration and Research work for
                      XI and XII, shall be additional the basis of experiential
                      learning.{" "}
                    </p>
                    <h1 class="text-2xl font-bold text-gray-800 mt-10 mb-4">
                      Teacher & Staff
                    </h1>
                    <hr className="border-2 mt-2 mb-4" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-10">
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/asha_dhoundiyal.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ASHA NEGI
                        </h1>
                      </div>

                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/diviya_arora.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. PRIYA PURKAIT
                        </h1>
                      </div>

                      <div className="text-center ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/neelam_aneja.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. NUPUR SHARMA JOSHI
                        </h1>
                      </div>

                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/manjula_arora.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. SHOBHA NAUTIYAL
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/babita_punetha.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. JASLEEN ARORA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/saroj_singh.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. SUMAN NEGI
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/rashmi_agarwal.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ANJU SHARMA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/anju_sharma_kukrety.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. RENU TRIPATHI
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/renu_tripathi.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. IQBAL KAUR LUTHRA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/ruchi_manral.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. RUCHI MANRAL
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/babita_punetha.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. JASLEEN ARORA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/saroj_singh.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. SUMAN NEGI
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/rashmi_agarwal.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. ANJU SHARMA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/anju_sharma_kukrety.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. RENU TRIPATHI
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/renu_tripathi.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. IQBAL KAUR LUTHRA
                        </h1>
                      </div>
                      <div className="text-center  ">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/ruchi_manral.webp"
                          alt=""
                          className="w-[300px] h-[250px] object-cover rounded-lg"
                        />
                        <h1 className="mt-3 font-bold tracking-tighter">
                          Ms. RUCHI MANRAL
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PrinciplePoliecies;
