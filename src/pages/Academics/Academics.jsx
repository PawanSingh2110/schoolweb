import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Academic } from "../../components/data";

import "../../components/component.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Sports = () => {
  const [value, setValue] = useState("Arts");
  const section1Ref = useRef(1);
  const section2Ref = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = () => {
    if (activeSection === 1) {
      section1Ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSection = () => {
    setActiveSection((prev) => (prev === 1 ? 2 : 1));
    scrollToSection();
  };
  return (
    <div className="w-full ">
      <div className=" title  h-48 py-10 font-open-sans  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium font-open-sans  text-center">
          Academics
        </h1>
        <h1 className="text-center font-open-sans  mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> Student Life <FaArrowRight />{" "}
          <span className="font-open-sans font-light">Academics</span>{" "}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row mt-12 lg:mt-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:w-1/4 flex-shrink-0" id="dep">
          <div className="space-y-0">
            <button
              className={` ${
                activeSection === 1
                  ? "block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start bg-gray-200"
                  : "block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start"
              }`}
              onClick={toggleSection}
            >
              {" "}
              <span>Academics</span>
            </button>
            {/* <button  className={` ${activeSection === 2? 'block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start bg-gray-200' : 'block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start'}`}  onClick={toggleSection}> <span>Result & Achivements</span></button> */}
            <button
              className={` ${
                activeSection === 2
                  ? "block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start bg-gray-200"
                  : "block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start"
              }`}
              onClick={toggleSection}
            >
              {" "}
              <span> Department</span>
            </button>
          </div>
        </div>

        <div className="lg:w-3/4 lg:pl-6 mt-4">
          <div ref={section1Ref}>
            <h3 className="text-2xl sm:text-2xl lg:text-3xl  font-open-sans font-bold text-black">
              Academics
            </h3>
            <hr className="my-4" />
            <article className="prose lg:prose-lg">
              <p className="font-open-sans font-light text-gray-700">
                The school provides a caring, friendly and well-structured
                Hybrid system of learning. We value students who are
                intellectually curious and creative and mentor them towards
                attaining academic excellence.
              </p>
              <p className="font-open-sans font-light text-gray-700 mt-4">
                The emphasis is on the holistic development of the child.
                Co-curricular activities and responsibility towards the
                environment are integrated into the learning process. The
                efforts are to remain abreast with the latest in the field of
                education, so that the academic programme remains contemporary
                and rigorous at all times.
              </p>
              <p className="font-open-sans font-light text-gray-700 mt-4">
                The school is affiliated to the Central Board of Secondary
                Education (CBSE). English is the medium of instruction. The
                school has a dedicated faculty of highly qualified and efficient
                teachers, who use modern techniques of teaching.
                Interdisciplinary and experiential learning is encouraged to
                strengthen conceptual knowledge.
              </p>
              <p className="font-open-sans font-light text-gray-700 mt-4">
                The school provides best-in-class infrastructure facilities to
                the students. The learning needs of each student are met in an
                environment that is supportive and affirming. Peer tutoring,
                remedial and enrichment classes are regularly conducted to
                optimize learning outcomes. The students of Little Scholars
                School have excelled in all fields and have proceeded to study
                in the top colleges{" "}
              </p>
            </article>
          </div>

          <div ref={section2Ref}>
            <h3 className="text-2xl sm:text-2xl lg:text-3xl  font-open-sans font-bold text-black mt-4">
              Departments
            </h3>
            <hr className="my-4" />
            <article>
              <ul className="flex flex-wrap gap-2 mb-4">
                {Academic.map((sport, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setValue(sport.name)}
                      className={`px-4 py-2 rounded-md border border-gray-500 ${
                        value === sport.name ? "bg-gray-200" : ""
                      }`}
                    >
                      {sport.name}
                    </button>
                  </li>
                ))}
              </ul>

              {value === "Arts" && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">
                    Arts Department
                  </h2>
                  <img
                    src="https://littlescholars-kashipur.com/images/student_life/academics/department/arts.webp"
                    alt=""
                    className="w-full"
                  />
                  <p className="mt-4 font-open-sans font-light text-gray-700 ">
                    Art is important because it has a powerful impact on our
                    moods and emotions and also allows us to express our
                    individuality. Drawing, painting and other art activities
                    enable students to become more creative. Students also
                    become more observant to the world around them by excelling
                    in art. <br /> <br />
                    Learning art helps students discover and explore their
                    creative sides and become more well - rounded personalities.
                    The students of fine arts participate in art competitions
                    ,poster making competitions ,board display and exhibitions
                    at various levels.Props stage sets and costumes are also
                    designed by the Art Department for various functions .{" "}
                  </p>
                  <div className="flex flex-col mb-20 mt-6 ">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp"
                          alt="Mr. Gopal Singh Bisht"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gopal <br /> Singh Bisht
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp"
                          alt="Mr. Gaurav Sharma"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gaurav <br /> Sharma
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp"
                          alt="Mr. Sanjay Bhardwaj"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Sanjay <br /> Bhardwaj
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {value === "Commerce" && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">
                    Commerce Department
                  </h2>
                  <img
                    src="https://littlescholars-kashipur.com/images/student_life/academics/department/commerce.webp"
                    alt=""
                    className="w-full"
                  />
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    Learning gives creativity, creativity leads to thinking and
                    thinking provides knowledge. knowledge makes you great --
                    'APJ Kalam' <br />
                    <br />
                    In order to fulfil its stated vision Commerce Department of
                    Little Scholars, a team of hard working and dedicated
                    faculty members is committed to Academic excellence with
                    holistic development of students. We strive to provide a
                    strong foundation to the students to become a future
                    entrepreneur and prepare for the position of leadership in
                    business organisations. <br />
                    <br />
                    We want our students to develop an enthusiasm and
                    understanding of changing business environment and empowers
                    them to take responsibility and decision indepndently.{" "}
                    <br />
                    <br />
                    We constantly organise open discussions on current economic
                    issues, debates, contests and quizzes , presentations,
                    industrial visits etc to foster a spirit of enquiry and
                    critical approach to their thinking about current issues.
                    More than 70% students of Commerce stream secure 90% plus
                    marks in board examination.
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp"
                          alt="Mr. Gopal Singh Bisht"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gopal <br /> Singh Bisht
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp"
                          alt="Mr. Gaurav Sharma"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gaurav <br /> Sharma
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp"
                          alt="Mr. Sanjay Bhardwaj"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Sanjay <br /> Bhardwaj
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {value === "English" && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">
                    English Department
                  </h2>
                  <img
                    src="https://littlescholars-kashipur.com/images/student_life/academics/department/english.webp"
                    alt=""
                  />
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    The English Department is a team of 11 well qualified,
                    responsible and dedicated teachers whose planning, ideas and
                    initiatives make the Department the fountainhead of all
                    scholastic and co-scholastic activities whether pertaining
                    to linguistics or even beyond, organised in school and
                    outside. <br />
                    <br />
                    Developing a love for the language the Department focusses
                    on the basic four skills of purposeful reading, effective
                    writing, keen listening and impactful speaking. Giving a
                    free run to children's imagination, it is excellence in the
                    creative field which is aimed, leading to some unforgettable
                    stage performances by participants. <br />
                    <br />
                    The Department is involved the year round in making
                    classroom learning interesting and giving ample
                    participation opportunities to children to shape their
                    personalities. In this endeavour the children show their
                    talent at both the In-School, and the Inter-School level. It
                    is seen by the Department that language related competitions
                    (Olympiad) and CBSE originating events get overwhelming
                    response.The Department is also involved in the publication
                    of news letters and the yearly school journal. In
                    collaboration with Twin-Win, the children's communication
                    skills and holistic development is ensured. <br />
                    <br />
                    Finally, the English Department is not merely a Language
                    Department. It takes upon itself the equally important task
                    of inculcating good habits and values among children,
                    underlining the Department's significant role in the welfare
                    of the children and the image building of the school.
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp"
                          alt="Mr. Gopal Singh Bisht"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gopal <br /> Singh Bisht
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp"
                          alt="Mr. Gaurav Sharma"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gaurav <br /> Sharma
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp"
                          alt="Mr. Sanjay Bhardwaj"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Sanjay <br /> Bhardwaj
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {value === "Hindi" && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">
                    Hindi Department
                  </h2>
                  <img
                    src="https://littlescholars-kashipur.com/images/student_life/academics/department/hindi.webp"
                    alt=""
                    className="w-full"
                  />
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    लिटिल स्कॉलर्स का हिंदी विभाग अन्य विभागों की भांति ही
                    अत्यंत उन्नत और समृद्धि शाली है। इस विद्यालय में हिंदी भाषा
                    को वही पद और प्रतिष्ठा प्राप्त है, जिसकी वह अधिकारिणी है।
                    हिंदी के उत्तरोत्तर विकास को ध्यान में रखते हुए विद्यालय में
                    समय-समय पर अनेकों कार्यक्रम आयोजित किए जाते हैं। इस विभाग से
                    संबंधित सभी शिक्षिकाएं अपने कार्य के प्रति पूर्ण समर्पित हैं
                    तथा दिए गए कार्य को पूरी श्रद्धा और तन्मयता के साथ निभाती
                    हैं। विद्यार्थी हिंदी के महत्व को भलीभांति समझें इस उद्देश्य
                    को पूरा करने लिए समय-समय पर वाद विवाद प्रतियोगिता, निबंध तथा
                    कहानी लेखन, कविता पाठ जैसी अनेकों प्रतियोगिताएं आयोजित की
                    जाती हैं,ताकि हिंदी निरंतर उन्नति एवं प्रगति के पथ पर अग्रसर
                    रहे।
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp"
                          alt="Mr. Gopal Singh Bisht"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gopal <br /> Singh Bisht
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp"
                          alt="Mr. Gaurav Sharma"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gaurav <br /> Sharma
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp"
                          alt="Mr. Sanjay Bhardwaj"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Sanjay <br /> Bhardwaj
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {value === "Humanities" && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">
                    Humanities Department
                  </h2>
                  <img
                    src="https://littlescholars-kashipur.com/images/student_life/academics/department/humanities.webp"
                    alt=""
                    className="w-full"
                  />
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    Little Scholars introduced Humanities Stream in 2020. For
                    long, the need was being felt to incorporate humanities for
                    those scholars who were aspiring a career in Civil services.
                    Fortunately, conditions proved propitious to offer
                    humanities to youngsters after class 10.Since its inception,
                    two years back, the newly formed humanities stream has
                    garnered unprecedented success. This year, we all are very
                    optimistic that the present first batch of talented
                    youngsters is going to set benchmarks, difficult to emulate.
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp"
                          alt="Mr. Gopal Singh Bisht"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gopal <br /> Singh Bisht
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp"
                          alt="Mr. Gaurav Sharma"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gaurav <br /> Sharma
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp"
                          alt="Mr. Sanjay Bhardwaj"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Sanjay <br /> Bhardwaj
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {value === "IT" && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">
                    IT Department
                  </h2>
                  <img
                    src="https://littlescholars-kashipur.com/images/student_life/academics/department/it.webp"
                    alt=""
                  />
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    “IT is ever-changing and there is the need to evolve in
                    order to stay relevant.” -Ryan Ogilvie <br /> <br />
                    At Little Scholars, the IT department with 3 efficient IT
                    personals always tries to provide the best and latest IT
                    features with optimum ease. Keeping in mind the above phrase
                    as key point, the IT department, always keeps on exploring
                    new ways and ideas in IT field and is always keen to adopt
                    the latest trends. <br />
                    <br />
                    During the recent years, when the whole world had
                    surrendered against the pandemic, IT professionals have
                    emerged out as the main warriors to let the professional
                    life continued in an uninterrupted mode. The term “Work from
                    home” has come into fashion only because of the hard work
                    put in by the IT professionals globally. <br />
                    <br />
                    Little Scholars has always been a pioneer in adopting and
                    applying all the new IT tools and ensured that the process
                    of learning goes on without any interruption.
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp"
                          alt="Mr. Gopal Singh Bisht"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gopal <br /> Singh Bisht
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp"
                          alt="Mr. Gaurav Sharma"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gaurav <br /> Sharma
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp"
                          alt="Mr. Sanjay Bhardwaj"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Sanjay <br /> Bhardwaj
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {value === "Maths" && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">
                    Maths Department
                  </h2>
                  <img
                    src="https://littlescholars-kashipur.com/images/student_life/academics/department/mathematics.webp"
                    alt=""
                    className="w-full"
                  />
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    Mathematics Department of the LITTLE SCHOLARS SENIOR
                    SECONDARY SCHOOL , BHALLA FARM , PRATAPPUR , KASHIPUR is a
                    family of 11 (PRT - 04 , TGT - 05 & PGT - 02)dedicated
                    teachers who help the students develop computational skills,
                    critical thinking, and problem solving skills. In the course
                    of their learning students obtain the ability to critically
                    assess numerical and graphical information; learn to
                    formulate strategies for solving problems and acknowledge
                    the importance of being intellectually curious. Since
                    learning Mathematics is a process that requires active
                    involvement so the teachers constantly provide opportunities
                    to enable the students to become engaged in the learning
                    process. Activity based learning that allows students to
                    explore and understand the difficult concepts on their own
                    is keenly promoted. We understand that each student
                    approaches problems differently hence collaborative learning
                    and peer tutoring is used as an effective teaching strategy.
                    This gives the young learners a chance to compare and
                    contrast methods and find what suits them best. The teachers
                    endeavour to provide personalised attention to each student.
                    They use observations, class work, projects and assessment
                    to gauge the level of the students and the necessary
                    enrichment or remedial schedule is worked out. <br />
                    <br />
                    Technology is used extensively for differentiated learners,
                    for simplification of complex concepts and also for
                    evaluation purposes. The Maths lab provides additional scope
                    to students to learn and explore mathematical facts and
                    theorems using technological tools. To add fun to learning
                    and also to enhance students' interest in the subject the
                    Department conducts various Mathematical competitions,
                    quizzes, digital story writing, mental ability/reasoning
                    etc. <br />
                    <br />
                    Maths & vedic Maths workshops have been conducted in the
                    past for the Junior classes by resource persons from
                    'Adhyayan group of Mumbai' as well as by the other famous &
                    renowned groups of Mathematics as a national/International
                    level. These enabled the children to develop Maths concepts
                    using fun activities. Our boys have learnt fractions,
                    integers, area, volume etc while playing basketball,
                    catching practice with rubber balls, going outdoors,
                    measuring various shapes and many more. A workshop on Vedic
                    Mathematics was conducted by renowned Twin win organization.
                    Through this students were taught various techniques of
                    addition, multiplication, decimal system, division, squares,
                    square roots, cubes etc. The Department in collaboration
                    with 'Educational Initiatives' conducts Asset and Detailed
                    Assessment tests to review the performance of the students
                    and find their areas of strength and weakness. The Mind Wars
                    assessments for classes VI and VII are a great success as
                    they are fashioned as per the learning pace of each child.
                    Instant feedback and remediation is the most useful feature
                    of these assessments. Maths Olympiads are also conducted to
                    test and enhance the skills of the students. The teachers
                    regularly participate in various mathematical workshops for
                    self-enrichment. The workshop conducted by prestigious &
                    renowned Ignited Mind of Mathematics (IMM) group New Delhi
                    on the History of Mathematics and making Maths fun was
                    particularly educative. Interdisciplinary and experiential
                    learning is encouraged through specific session of
                    Mathematics classes / Projects / Power point presentation
                    etc. <br />
                    <br />
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp"
                          alt="Mr. Gopal Singh Bisht"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gopal <br /> Singh Bisht
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp"
                          alt="Mr. Gaurav Sharma"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gaurav <br /> Sharma
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp"
                          alt="Mr. Sanjay Bhardwaj"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Sanjay <br /> Bhardwaj
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {value === "Physical Education" && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">
                    Physical Education Department
                  </h2>
                  <img
                    src="https://littlescholars-kashipur.com/images/student_life/academics/department/physical-education.webp"
                    alt=""
                    className="w-full"
                  />
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    Sports are an integral part of life at school. We take pride
                    in inculcating sportsmanship in our student body.Students
                    are encouraged to compete with each other in inter house
                    competitions. Our sports infrastructure is among the best in
                    the country with modern basketball courts, tennis courts,
                    all weather swimming pool, cricket pitches, squash courts,
                    and indoor badminton courts.Various athletes and players
                    have won numerous tournaments over the years and represented
                    Uttrakhand at the state and national level.
                  </p>

                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp"
                          alt="Mr. Gopal Singh Bisht"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gopal <br /> Singh Bisht
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp"
                          alt="Mr. Gaurav Sharma"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gaurav <br /> Sharma
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp"
                          alt="Mr. Sanjay Bhardwaj"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Sanjay <br /> Bhardwaj
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {value === "Science" && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">
                    Science Department
                  </h2>
                  <img
                    src="https://littlescholars-kashipur.com/images/student_life/academics/department/science.webp"
                    alt=""
                    className="w-full"
                  />
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    Albert Einstein said, “The whole of science is nothing more
                    than a refinement of everyday thinking.”This is exactly what
                    the Science Department comprising of 8 highly qualified
                    teachers believes in . <br /> <br />
                    In order to create scientific temperament and skill in the
                    minds of students the members of science department support
                    disciplinary and experiential learning . The four
                    E's(engage,explore,explain and evaluate)are followed for
                    enhanced learning out comes. Workshops and seminars are
                    organized on regular basis to train the students . <br />{" "}
                    <br />
                    Teachers emphasise on activities rather than rote learning
                    and encourage children to ask questions . The Faculty
                    members prepare children for participating in different
                    quizzes ,exhibitions and fairs at school and interschool
                    levels. For the students of Little Scholars Science is fun,
                    Science is curiosity, Science is the process of
                    investigating by posing questions and coming up with
                    solutions .{" "}
                  </p>

                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp"
                          alt="Mr. Gopal Singh Bisht"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gopal <br /> Singh Bisht
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp"
                          alt="Mr. Gaurav Sharma"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Gaurav <br /> Sharma
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp"
                          alt="Mr. Sanjay Bhardwaj"
                          className="shadow-lg h-[150px] max-w-[150px]"
                        />
                        <span className="mt-2">
                          Mr. Sanjay <br /> Bhardwaj
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
