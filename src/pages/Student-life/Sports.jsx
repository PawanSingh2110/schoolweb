import React, { useState,useRef} from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper/modules';
import { Sportdata } from '../../components/data';
import img1 from "../../images/image1.webp";
import img2 from "../../images/image2.webp";
import img3 from "../../images/image3.webp";
import '../../components/component.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Sports = () => {
  const [value, setValue] = useState("Football");
  const section1Ref = useRef(1);
  const section2Ref = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
 
    
  const scrollToSection = () => {
   
    if (activeSection === 1) {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSection = () => {
    setActiveSection(prev => (prev === 1 ? 2 : 1));
    scrollToSection();
  };
return (
<div className="w-full ">
      <div className=" title  h-48 py-10 font-open-sans  text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium font-open-sans  text-center" >Sports</h1>
        <h1 className="text-center font-open-sans  mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> Student Life <FaArrowRight/> <span className="font-open-sans font-light">Sports</span> </h1>
  </div>
    <div className="flex flex-col lg:flex-row mt-12 lg:mt-28 px-4 sm:px-6 lg:px-8 relative" > 
        <div className="lg:w-1/4 flex-shrink-0" id="dep">
          <div className="space-y-0">
            <button  className={` ${activeSection === 1 ? 'block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start bg-gray-200' : 'block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start'}`}  onClick={toggleSection}> <span>Sports</span></button>
            <button className={` ${activeSection === 2 ? 'block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start bg-gray-200' : 'block w-full h-10 border border-gray-500 pl-4 pt-2 border-t-4 flex items-center justify-start'}`}  onClick={toggleSection}> <span> Department</span></button>
          </div>
        </div>
        

        <div className="lg:w-3/4 lg:pl-6 mt-4"  >
        <div ref={section1Ref} >
          <h3 className="text-2xl sm:text-2xl lg:text-3xl  font-open-sans font-bold text-black"  >Sports</h3>
           <hr className="my-4" />
            <article className="prose lg:prose-lg">
              <p className="font-open-sans font-light text-gray-700">
              
              In the Junior Section, depending upon the season, students are required to train in a minimum of two sports. They undergo training in Football, Cricket, Athletics, Basketball, Tennis, Squash, Kho-Kho, Table Tennis and Swimming. The students are encouraged to specialize in the sport according to their inclination and also based on the suggestions of the expert Coaches for at least one whole year. Many of them stay specialised with that sport and acquire special skills. However, the students are encouraged to play inter-house tournaments and participate in other sports, to promote all-rounder sportsmen. This emphasis also instils team spirit skills for life beyond the school days, and a wider appreciation of sport in general. The marathon is a mandatory event and is one of the key resources for the assessment of student health and wellbeing. Every student on an average is required to play for an hour of sports every day. Further, the school has a mission that every student must be able to swim.
                
              </p>
              <p className="font-open-sans font-light text-gray-700 mt-4">
              The students regularly represent National, State, District, Inter School and CBSE tournaments. Many national level sportsmen have emerged from the school. Apart from outdoor sports, the students are encouraged to play cerebral games like Chess.

              </p>
              <p className="font-open-sans font-light text-gray-700 mt-4">
               
              Adventure Camps are a yearly feature of the school and a lifetime experience for the students.
                
              </p>
            </article>
          </div>
          
          <div ref={section2Ref}>
            <h3 className="text-2xl sm:text-2xl lg:text-3xl  font-open-sans font-bold text-black mt-4" >Departments</h3>
            <hr className="my-4" />
            <article>
              <ul className="flex flex-wrap gap-2 mb-4">
                {Sportdata.map((sport, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setValue(sport.name)}
                      className={`px-4 py-2 rounded-md border border-gray-500 ${value === sport.name ? 'bg-gray-200' : ''}`}
                    >
                      {sport.name}
                    </button>
                  </li>
                ))}
              </ul>

              {value === 'Football' && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">Football Department</h2>
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay
              
                  >
                    <SwiperSlide><img src={img1} alt="Football Slide 1" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="Football Slide 2" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="Football Slide 3" className="w-full h-auto" /></SwiperSlide>
                  </Swiper>
                  <p className="mt-4 font-open-sans font-light text-gray-700 ">
                  WORLD'S MOST POPULAR GAME-- Football or Soccer Is A Way of Life in Little Scholars Equipped with the best playing facilities, our school boasts of a full dimension football field. Under the able guidance of their coaches, our footballers have always been at the forefront in various tournaments. As a well spun and conditioned outfit, they have brought home many a laurels. In the post- pandemic phase, we are quite optimistic that our soccer team will be in the reckoning at various competitions.
                  </p>
                  <div className="flex flex-col mb-20 mt-6 ">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp" alt="Mr. Gopal Singh Bisht" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gopal <br /> Singh Bisht</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp" alt="Mr. Gaurav Sharma" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gaurav <br /> Sharma</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp" alt="Mr. Sanjay Bhardwaj" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Sanjay <br /> Bhardwaj</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {value === 'Cricket' && (
                <div>
                   <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">Cricket Department</h2>
                  <Swiper
                    modules={[Navigation,Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay
                    
           >
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/cricket/2.webp" alt="Cricket Slide 1" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/cricket/3.webp" alt="Cricket Slide 2" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/cricket/5.webp" alt="Cricket Slide 3" className="w-full h-auto" /></SwiperSlide>
                  </Swiper>
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    Game of the Teeming Millions Cricket in India, enjoys the biggest fan following...
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4"/>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp" alt="Mr. Gopal Singh Bisht" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gopal <br /> Singh Bisht</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp" alt="Mr. Gaurav Sharma" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gaurav <br /> Sharma</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp" alt="Mr. Sanjay Bhardwaj" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Sanjay <br /> Bhardwaj</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
                {value === 'Volleyball' && (
                <div>
                   <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">Volleyball Department</h2>
                  <Swiper
                    modules={[Navigation,Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay
          
                  >
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/Volleyball.webp" alt="Cricket Slide 1" className="w-full h-auto" /></SwiperSlide>

                  </Swiper>
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                  Little scholars is aquipped with two Volleyball court seperate for boys and girls.The school team has won many a laurels at the interschool, interdistrict and interstate levels.
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4"/>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp" alt="Mr. Gopal Singh Bisht" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gopal <br /> Singh Bisht</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp" alt="Mr. Gaurav Sharma" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gaurav <br /> Sharma</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp" alt="Mr. Sanjay Bhardwaj" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Sanjay <br /> Bhardwaj</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
                {value === 'Basketball' && (
                <div>
                   <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">Basketball  Department</h2>
                  <Swiper
                    modules={[Navigation,Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay
                   
            
                  >
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/basketball.webp" alt="Cricket Slide 1" className="w-full h-auto" /></SwiperSlide>
                   
                  </Swiper>
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                  
                  OUR EXCEPTIONAL CAGERS CANNOT BE CAGED Basketball has always been our forte. Every year, in the month of October, we host Shakuntala Bhalla Memorial Inter School Basketball wherein, schools from Kashipur, Bazpur, Jaspur, Nainital and Rudrapur have been participating with zeal. The school has two basketball courts of international specifications and every effort is made to ensure that basketball continues in our routine. For this, we have coaches on campus. Indeed, we take pride in our accomplishments.  
                            
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4"/>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp" alt="Mr. Gopal Singh Bisht" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gopal <br /> Singh Bisht</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp" alt="Mr. Gaurav Sharma" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gaurav <br /> Sharma</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp" alt="Mr. Sanjay Bhardwaj" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Sanjay <br /> Bhardwaj</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
                {value === 'Badminton' && (
                <div>
                   <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">Badminton Department</h2>
                  <Swiper
                    modules={[Navigation,Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay
                   
                
                  >
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/badminton/badminton3.webp" alt="Cricket Slide 1" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/badminton/badminton4.webp" alt="Cricket Slide 2" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/badminton/badminton1.webp" alt="Cricket Slide 3" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/badminton/badminton2.webp" alt="Cricket Slide 3" className="w-full h-auto" /></SwiperSlide>
                  </Swiper>
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                  Badminton is a great sport for fitness and is very excellent for individuals of all age groups. If you want to try out a new racket sport, it is a great choice. It is officially chosen as the fastest of all racket sports in the world. The speed at which a player can hit the shuttlecock is up to 288kph toward their opponent.

A player can also run around the court up to 6.4km or 4 miles during the match, so the players must have great agility to keep up with this game. Although agility and stamina are necessary for this game at a competitive level, anyone can play this game to achieve fitness and flexibility.
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <hr className="my-4"/>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp" alt="Mr. Gopal Singh Bisht" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gopal <br /> Singh Bisht</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp" alt="Mr. Gaurav Sharma" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gaurav <br /> Sharma</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp" alt="Mr. Sanjay Bhardwaj" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Sanjay <br /> Bhardwaj</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {value === 'Kho-Kho' && (
                <div>
                  <h2 className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">Kho-Kho Department</h2>
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay
                   
              
                  >
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/kho-kho.webp" alt="Swimming Slide 1" className="w-full h-auto" /></SwiperSlide>
                  </Swiper>
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                  Little scholars is dotted with a KHO-KHO ground.Its a traditional Indian game, the school team has won at school level and district levels and few children were selected for state level.
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp" alt="Mr. Gopal Singh Bisht" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gopal <br /> Singh Bisht</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp" alt="Mr. Gaurav Sharma" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gaurav <br /> Sharma</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp" alt="Mr. Sanjay Bhardwaj" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Sanjay <br /> Bhardwaj</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {value === 'Swimming' && (
                <div>
                  <h2  className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">Swimming Department</h2>
                  <Swiper
                    modules={[Navigation,Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay
                    
            
                  >
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/swimming/1.webp" alt="Swimming Slide 1" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/swimming/2.webp" alt="Swimming Slide 2" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/swimming/3.webp" alt="Swimming Slide 3" className="w-full h-auto" /></SwiperSlide>
                  </Swiper>
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    Swimming is one of the best ways to keep fit and maintain a healthy lifestyle...
                  </p>
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp" alt="Mr. Gopal Singh Bisht" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gopal <br /> Singh Bisht</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp" alt="Mr. Gaurav Sharma" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gaurav <br /> Sharma</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp" alt="Mr. Sanjay Bhardwaj" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Sanjay <br /> Bhardwaj</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {value === 'Chess' && (
                <div>
                  <h2  className="text-xl sm:text-1xl lg:text-2xl font-open-sans font-light mt-2 mb-3">Chess Department</h2>
                  <Swiper
                    modules={[Navigation,Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay
                  
                  >
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/chess/3.webp" alt="Swimming Slide 1" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/chess/1.webp" alt="Swimming Slide 2" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="https://littlescholars-kashipur.com/images/student_life/sports/chess/2.webp" alt="Swimming Slide 3" className="w-full h-auto" /></SwiperSlide>
                  </Swiper>
                  <p className="mt-4 font-open-sans font-light text-gray-700">
                    
                  Little Scholars is one of the few schools having facility of teaching Chess in school. The game of chess is considered as the best exercise for brain. 
                        
                  </p>
                   
                    
                   <p className="mt-4 font-open-sans font-light text-gray-700">
                    
                    Little Scholars is one of the few schools having facility of teaching Chess in school. The game of chess is considered as the best exercise for brain. 
                          
                    </p>
                    <p className="mt-4 font-open-sans font-light text-gray-700">
                      
                    Our Student Ansh Agarwal, Dev Rastogi and ex-student Krish Agarwal were rewarded in the chess competition held around Kashipur. 
                        
                    </p>
                        
               
                  <div className="mb-20 mt-6">
                    <h4 className="text-xl font-semibold">TEACHERS & STAFF</h4>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gopal_singh_bisht.webp" alt="Mr. Gopal Singh Bisht" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gopal <br /> Singh Bisht</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/sanjay_bhardwaj.webp" alt="Mr. Gaurav Sharma" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Gaurav <br /> Sharma</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://littlescholars-kashipur.com/images/faculties/gourav_sharma.webp" alt="Mr. Sanjay Bhardwaj" className="shadow-lg h-[150px] max-w-[150px]" />
                        <span className="mt-2">Mr. Sanjay <br /> Bhardwaj</span>
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