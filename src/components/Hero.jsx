import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo.webp";
import './component.css'; // Import the CSS file


function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" hidden head lg:flex justify-between text-semibold text-white py-4 pl-20 pr-5 max-xl:flex-col items-center gap-5 max-sm:hidden">
        <div className="flex gap-5 max-lg:flex-wrap  justify-center">
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <i className="fa-solid fa-phone"></i>
            <span className="">Ph: +91 9105666371</span>
          </div>

          <div className="line max-lg:hidden"></div>

          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <i className="fa-solid fa-envelope"></i>
            <span>littlescholars.kashipur@gmail.com</span>
          </div>

          <div className="line max-lg:hidden"></div>

          <div className="flex justify-center items-center gap-2">
            <i className="fa-solid fa-map"></i>
            <span>Bhalla Farm Pratapur, Ramnagar Road, Kashipur</span>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <i className="fa-brands fa-facebook cursor-pointer p-2 rounded-3xl hover:bg-black"></i>
          <i className="fa-brands fa-instagram cursor-pointer p-2 rounded-3xl hover:bg-black"></i>
          <i className="fa-brands fa-youtube cursor-pointer p-2 rounded-3xl hover:bg-black"></i>
          <a href="#">e-Care Login</a>
        </div>
      </div>

      <div className="animeBg py-3 text-white font-medium">
        <div className="anime flex flex-row gap-10">
          <a href="#" className="whitespace-nowrap">
            📖 REGISTRATION OPEN FOR SESSION 2024-25. Click here 📖
          </a>
          <a href="#" className="whitespace-nowrap">
            📖 REGISTRATION OPEN FOR SESSION 2024-25. Click here 📖
          </a>
          <a href="#" className="whitespace-nowrap">
            📖 REGISTRATION OPEN FOR SESSION 2024-25. Click here 📖
          </a>
        </div>
      </div>

      <nav className="sticky top-0 z-20 w-full flex flex-row justify-between items-center py-3 px-20  bg-white  max-xl:px-5">
        <div className=" w-24 md:w-36">
          <Link to="/"><img className="" src={logo} alt="" /></Link>
        </div>
        <div className="text-base font-semibold max-xl:hidden">
          <ul className="flex">
            <li className="dropdown">
              <div className="menu py-3 mb-4">
                <a href="#">About us</a>
                <i className="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li>
                  <Link to="/Founder-desk">Founder's Desk</Link>
                </li>
                <li>
                  <Link to="/Principle-desk" ><a href="#">Principal's Desk</a></Link>
                  
                </li>
                <li>
                  <Link to="/School-management" ><a href="#">School Management</a></Link>
                
                </li>
                <li>
                  <Link to="/Management-Committie" > <a href="#">Managing Committee</a></Link>
                 
                </li>
                <li>
                  <Link to="/Policy" ><a href="#">Principal & Policies</a></Link>
                  
                </li>
                <li>
                <Link to="/Infrastructure">Infrastructure</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="menu py-3 mb-4">
                <a href="#">Admission</a>
                <i className="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li><Link to="/Addmission-helpdesk">Admission Helpdesk / School Visit</Link></li>
                <li><Link to="/Addmission-Prodecure">Admission Procedure</Link></li>
                <li><Link to="/Registration">Registration</Link></li>
                <li><Link to="/School-timing">School Timings</Link></li>
                <li><Link to="/FAQ">FAQ's</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <div className="menu py-3 mb-4">
                <a href="#">Student Life</a>
                <i className="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li><Link to="/Academics">Academics</Link></li>
                <li><Link to="/Sports">Sports</Link></li>  
                <li><Link to="/CoCurricularPage">Co-Curricular</Link></li>
                <li><Link to="/SocioPage">Socio-Cultural Development</Link></li>
                
                <li className="dropdown">
                  <div>
                    <Link to="#">Council Guidelines</Link>
                    <i className="fa-solid fa-chevron-right p-1"></i>
                  </div>
                  <ul className="submenu sub-menu-right">
                    <li><Link to="/school-form">Student Form</Link></li>
                    <li><Link to="/parent-form">Parent Form</Link></li>
                  </ul>
                </li>
                <li><Link to="/Achievements">Achievements</Link></li>
                <li><Link to="/EventClander">Events Calendar</Link></li>
                <li><Link to="/Toppers">Toppers</Link></li>
                <li><Link to="/Cabinet">Cabinet</Link></li>
              </ul>
            </li>
            <li>
              <div className="menu py-3 mb-4">
                <a href="#">News & Calendar</a>
                <i className="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li><Link to="/Student-Handbook">Student Hand Book</Link></li>
                <li><Link to="/EScholar">Newsletter / Scholar Times</Link></li>
              </ul>
            </li>
            <li>
              <div className="menu py-3 mb-4">
                <a href="#">Mandatory Disclosures</a>
                <i className="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li><Link to="#">Book List</Link></li>
                <li><Link to="#">Safety Certificates & Affiliations</Link></li>
                <li><Link to="#">CBSE-OASIS</Link></li>
              </ul>
            </li>
            <li>
              <div className="menu py-3 mb-4">
                <a href="#">Contact Us</a>
                <i className="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li><Link to="#">Reach Us</Link></li>
                <li><Link to="#">Career</Link></li>
                <li><Link to="#">Guest Book</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        
        <div 
        className="xl:hidden"
        onClick={() => setIsOpen(!isOpen)}
        >
          <i class="fa-solid fa-bars text-2xl"></i>
        </div>
      </nav>

      <div className={`hamburger  ${isOpen ? "block" : "hidden"}`}>
        <div onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-xmark text-3xl text-white cursor-pointer p-2"></i>
        </div>
        <ul className="accordion text-xl">
          <li className="accordion-item">
            <input type="checkbox" id="about-us" className="accordion-toggle" />
            <label htmlFor="about-us" className="accordion-header">
              About us <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li>
              <Link to="/Founder-desk">Founder's Desk</Link>
              </li>
              <li>
                <a href="/Principle-desk">Principal's Desk</a>
              </li>
              <li>
                <a href="/School-management">School Management</a>
              </li>
              <li>
                <a href="/Management-Committie">Managing Committee</a>
              </li>
              <li>
                <a href="/Policy">Principal & Policies</a>
              </li>
              <li>
                <a href="/Infrastructure">Infrastructure</a>
              </li>
            </ul>
          </li>
          <li className="accordion-item">
            <input type="checkbox" id="admission" className="accordion-toggle" />
            <label htmlFor="admission" className="accordion-header">
              Admission <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
            <li><Link to="/Addmission-helpdesk">Admission Helpdesk / School Visit</Link></li>
                <li><Link to="/Addmission-Prodecure">Admission Procedure</Link></li>
                <li><Link to="/Registration">Registration</Link></li>
                <li><Link to="/School-timing">School Timings</Link></li>
                <li><Link to="/FAQ">FAQ's</Link></li>
            </ul>
          </li>
          <li className="accordion-item">
            <input type="checkbox" id="student-life" className="accordion-toggle" />
            <label htmlFor="student-life" className="accordion-header">
              Student Life <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li><Link to="/Academics">Academics</Link></li>
              <li><Link to="/Sports">Sports</Link></li>
             
              <li><Link to="/CoCurricularPage">Co-Curricular</Link></li>
              <li><Link to="/SocioPage">Socio-Cultural Development</Link></li>
              
              <li className="accordion-item">
                <input type="checkbox" id="council-guidelines" className="accordion-toggle" />
                <label htmlFor="council-guidelines" className="accordion-header">
                  Council Guidelines <i className="fa-solid fa-chevron-right"></i>
                </label>
                <ul className="accordion-content">
                  <li><Link to="/school-form">Student Form</Link></li>
                  <li><Link to="/parent-form">Parent Form</Link></li>
                </ul>
              </li>
              <li><Link to="/Achievements">Achievements</Link></li>
                <li><Link to="/EventClander">Events Calendar</Link></li>
                <li><Link to="/Toppers">Toppers</Link></li>
                <li><Link to="/Cabinet">Cabinet</Link></li>
            </ul>
          </li>
          <li className="accordion-item">
            <input type="checkbox" id="news-calendar" className="accordion-toggle" />
            <label htmlFor="news-calendar" className="accordion-header">
              News & Calendar <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
            <li><Link to="/Student-Handbook">Student Hand Book</Link></li>
            <li><Link to="#">Newsletter / Scholar Times</Link></li>
            </ul>
          </li>
          <li className="accordion-item">
            <input type="checkbox" id="mandatory-disclosures" className="accordion-toggle" />
            <label htmlFor="mandatory-disclosures" className="accordion-header">
              Mandatory Disclosures <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li><Link to="#">Book List</Link></li>
              <li><Link to="#">Safety Certificates & Affiliations</Link></li>
              <li><Link to="#">CBSE-OASIS</Link></li>
            </ul>
          </li>
          <li className="accordion-item">
            <input type="checkbox" id="contact-us" className="accordion-toggle" />
            <label htmlFor="contact-us" className="accordion-header">
              Contact Us <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li><Link to="#">Reach Us</Link></li>
              <li><Link to="#">Career</Link></li>
              <li><Link to="#">Guest Book</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hero;