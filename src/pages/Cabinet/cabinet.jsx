import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cabinet = () =>{

    const [selectedYear, setSelectedYear] = useState(null);

    const cabinets = {
      2024: [
        { name: 'chhavit', role: 'head boy', img: '/images/cabinets/chhavit.jpg' },
        { name: 'sukhmeet kaur', role: 'head girl', img: '/images/cabinets/sukhmeet kaur.webp' },
        { name: 'navrup kaur', role: 'editorial head', img: '/images/cabinets/navrup kaur.webp' },
        { name: 'medhansh arora', role: 'cultural head', img: '/images/cabinets/medhansh arora.webp' },
        { name: 'neeraj negi', role: 'sports captain', img: '/images/cabinets/neeraj negi.webp' },
        { name: 'yashaswi latwal', role: 'sports captain', img: '/images/cabinets/yashaswi latwal.webp' },
        { name: 'gurmil kaur', role: 'house captain girl ganga', img: '/images/cabinets/gurmil kaur.webp' },
        { name: 'gauri dangwal', role: 'house captain girl krishna', img: '/images/cabinets/gauri dangwal.webp' },
        { name: 'komal preet kaur', role: 'house captain girl yamuna', img: '/images/cabinets/komal preet kaur.webp' },
        { name: 'vedansh chauhan', role: 'house captain boy kaveri', img: '/images/cabinets/vedansh chauhan.webp' },
      ],
      2023: [
        { name: 'Vansh Nautiyal', role: 'head boy', img: 'images/cabinets/VANSH NAUTIYAL HEAD BOY - 12A.webp' },
        { name: 'Auli Arora', role: 'head girl', img: 'images/cabinets/AULI ARORA HEAD GIRL - 12C.webp' },
        { name: 'Shreya Chauhan', role: 'sports captain', img: 'images/cabinets/SHREYA CHAUHAN SPORTS CAPTAIN - 12B.webp' },
        { name: 'Karan Singh Bisht', role: 'sports captain', img: 'images/cabinets/KARAN SINGH BISHT SPORTS CAPTAIN - 12A.webp' },
        { name: 'Shreya Bhardwaj', role: 'house captain girl ganga', img: 'images/cabinets/SHREYA BHARDWAJ HOUSE CAPTAIN GANGA HOUSE (Blue) - 12C.webp' },
        { name: 'Ishaan Punetha', role: 'house captain boy ganga', img: 'images/cabinets/ISHAAN PUNETHA GANGA HOUSE CAPTAIN _BLUE_ - 12A.webp' },
        { name: 'Avani Sharma', role: 'house captain girl krishna', img: 'images/cabinets/AVANI SHARMA HOUSE CAPTAIN KRISHNA HOUSE (YELLOW) - 12D.webp' },
        { name: 'Akshej Gupta', role: 'house captain boy krishna', img: 'images/cabinets/AKSHEJ GUPTA HOUSE CAPTAIN KRISHNA HOUSE (YELLOW) - 12B.webp' },
        { name: 'Aakrati Kalra', role: 'house captain girl yamuna', img: 'images/cabinets/AAKRATI KALRA HOUSE CAPTAIN YAMUNA HOUSE (Red) - 12C.webp' },
        { name: 'Suryansh Saxena', role: 'house captain boy yamuna', img: 'images/cabinets/SURYANSH SAXENA HOUSE CAPTAIN YAMUNA HOUSE (Red) - 12B.webp' },
        { name: 'Vaishnavi Ojha', role: 'house captain girl kaveri', img: 'images/cabinets/VAISHNAVI OJHA HOUSE CAPTAIN KAVERI HOUSE (GREEN) - 12B.webp' },
        { name: 'Piyush Suyal', role: 'house captain boy kaveri', img: 'images/cabinets/PIYUSH SUYAL HOUSE CAPTAIN KAVERI HOUSE (GREEN) - 12B.webp' },
      ],
      2022: [
        { name: 'devansh saxena', role: 'head boy', img: "images/cabinets/Head Boy DEVANSH SAXENA.webp" },
        { name: 'manogya joshi', role: 'head girl', img: "images/cabinets/Head Girl MANOGYA JOSHI.webp" },
        { name: 'yug gariya', role: 'sports captain', img: "images/cabinets/Sports Captain YUG GARIYA.webp" },
        { name: 'aakanksha sati', role: 'sports captain', img: "images/cabinets/Sports Captain AKANSHA SATI.webp" },
        { name: 'priyanshu arya', role: 'house captain boy ganga', img: "images/cabinets/GANGA HOUSE House Captain Boy - PRIYANSHU ARYA.webp" },
        { name: 'bhawana joshi', role: 'house captain girl ganga', img: "images/cabinets/GANGA HOUSE House Captain Girl - BHAWANA JOSHI.webp" },
        { name: 'ishant bangari', role: 'house captain boy krishna', img: "images/cabinets/Krishna House House Captain Boy - ISHANT BANGARI.webp" },
        { name: 'prisha bhalla', role: 'house captain girl krishna', img: "images/cabinets/Krishna House House Captain Girl - PRISHA BHALLA.webp" },
        { name: 'divyansh upreti', role: 'house captain boy yamuna', img: "images/cabinets/Yamuna House Captain Boy - DIVYANSH UPRETI.webp" },
        { name: 'upneet kaur', role: 'house captain girl yamuna', img: "images/cabinets/Yamuna House Captain Girl - UPNEET KAUR.webp" },
        { name: 'saksham agarwal', role: 'house captain boy kaveri', img: "images/cabinets/Kaveri House Captain Boy - SAKSHAM AGARWAL.webp" },
        { name: 'priyanshi madhwal', role: 'house captain girl kaveri', img: "images/cabinets/Kaveri House Captain Girl - PRIYANSHI MADHWAL.webp" }
    ],
    2019:[
      {
        role: 'head boy',
        name: 'shrey sharma',
        img: 'images/cabinets/Shrey Sharma Head Boy.webp',
        alt: 'shrey sharma'
      },
      {
        role: 'head girl',
        name: 'ananya mishara',
        img: 'images/cabinets/Ananya Mishara Head Girl.webp',
        alt: 'ananya mishara'
      },
      {
        role: 'sports captain',
        name: 'abhishek chauhan',
        img: 'images/cabinets/Abhishek Chauhan Sports Captain.webp',
        alt: 'abhishek chauhan'
      },
      {
        role: 'sports captain',
        name: 'divyangana bhatt',
        img: 'images/cabinets/Divyangana Bhatt Sports Captains.webp',
        alt: 'divyangana bhatt'
      },
      {
        role: 'house captain',
        name: 'devbrath rajwar',
        img: 'images/cabinets/Devbrath Rajwar House Captain.webp',
        alt: 'devbrath rajwar'
      },
      {
        role: 'house captain',
        name: 'divyansh chauhan',
        img: 'images/cabinets/Divyanshu Chauhan House Captain.webp',
        alt: 'divyansh chauhan'
      },
      {
        role: 'house captain',
        name: 'happy rahgav',
        img: 'images/cabinets/Happy Raghav House Captain.webp',
        alt: 'happy rahgav'
      },
      {
        role: 'house captain',
        name: 'isha joshi',
        img: 'images/cabinets/Isha Joshi House Captain.webp',
        alt: 'isha joshi'
      },
      {
        role: 'house captain',
        name: 'manasvi',
        img: 'images/cabinets/Manasvi House Captain.webp',
        alt: 'manasvi'
      },
      {
        role: 'house captain',
        name: 'shruti goswami',
        img: 'images/cabinets/Shruti Goswami House Captain.webp',
        alt: 'shruti goswami'
      },
      {
        role: 'house captain',
        name: 'srishti rawat',
        img: 'images/cabinets/Srishti Rawat House Captain.webp',
        alt: 'srishti rawat'
      },
      {
        role: 'house captain',
        name: 'tejender yadav',
        img: 'images/cabinets/Tejender Yadav House Captain.webp',
        alt: 'tejender yadav'
      },

    ],
    2018:[
      {
        name: 'Ayush Bharti',
        role: 'Head Boy',
        img: 'images/cabinets/AYUSH-BHARTI-Head-Boy.webp'
      },
      {
        name: 'Vibhushita Chhabra',
        role: 'Head Girl',
        img: 'images/cabinets/VIBHUSHITA-CHHABRA-Head-Girl.webp'
      },
      {
        name: 'Mohit Priydarshni',
        role: 'Sports Captain (Boys)',
        img: 'images/cabinets/Mohit-Priydarshni-Sports---Captain(Boys).webp'
      },
      {
        name: 'Vanshika Manral',
        role: 'Sports Captain (Girls)',
        img: 'images/cabinets/vanshika-Manral-Sports---Captain(Girls).webp'
      },
      {
        name: 'Shobhit Majumdar',
        role: 'House Captain (Boys) - Ganga',
        img: 'images/cabinets/shobhit-Majumdar-ganga-House---Captain.webp'
      },
      {
        name: 'Tarun Chaudhary',
        role: 'House Captain (Boys) - Yamuna',
        img: 'images/cabinets/Tarun-Chaudhary-Yamuna-House---Captain.webp'
      },
      {
        name: 'Tanisha Agarwal',
        role: 'House Captain (Girls) - Kaveri',
        img: 'images/cabinets/Tanisha-Agarwal-Kaveri-House---Captain.webp'
      }
    ]
   
      // Add more years and their respective cabinets here
    };

    const handleYearClick = (year) => {
        setSelectedYear(year);
      };
    
    return (
        <div>
          {/* Title Section */}
          <div className="title w-full h-48 py-10 text-white bg-orange-500">
            <h1 className="lg:text-5xl text-3xl font-medium text-center">Student-Life</h1>
            <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
              Home <FaArrowRight /> Student-Life <FaArrowRight />{" "}
              <span className="font-medium"> Cabinet</span>
            </h1>
          </div>
          <section className="bg-silver-light">
      <div className="container">
        <div className="section-title">
          <div className="ps-0 mb-4">
            <button
              className="btn-plain-text-with-arrow arrow-theme-colored4 backward-btn"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedYear(null)}
            >
              Go Back
            </button>
          </div>
          <div className="row" id="view">
            {!selectedYear ? (
              <>
                <div className="p-3 col-md-4 col-sm-12">
                  <div
                    className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                    onClick={() => handleYearClick(2024)}
                    style={{
                      textTransform: 'capitalize',
                      borderRadius: '1rem',
                      cursor: 'pointer',
                      backgroundColor: '#202C45', // Example background color
                    }}
                  >
                    2024-25
                  </div>
                </div>
                <div className="p-3 col-md-4 col-sm-12">
                  <div
                    className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                    onClick={() => handleYearClick(2023)}
                    style={{
                      textTransform: 'capitalize',
                      borderRadius: '1rem',
                      cursor: 'pointer',
                      backgroundColor: '#202C45', // Example background color
                    }}
                  >
                    2023-24
                  </div>
                </div>
                <div className="p-3 col-md-4 col-sm-12">
                  <div
                    className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                    onClick={() => handleYearClick(2022)}
                    style={{
                      textTransform: 'capitalize',
                      borderRadius: '1rem',
                      cursor: 'pointer',
                      backgroundColor: '#202C45', // Example background color
                    }}
                  >
                    2022-23
                  </div>
                </div>
                <div className="p-3 col-md-4 col-sm-12">
                  <div
                    className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                    onClick={() => handleYearClick(2019)}
                    style={{
                      textTransform: 'capitalize',
                      borderRadius: '1rem',
                      cursor: 'pointer',
                      backgroundColor: '#202C45', // Example background color
                    }}
                  >
                    2019-20
                  </div>
                </div>
                <div className="p-3 col-md-4 col-sm-12">
                  <div
                    className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                    onClick={() => handleYearClick(2018)}
                    style={{
                      textTransform: 'capitalize',
                      borderRadius: '1rem',
                      cursor: 'pointer',
                       backgroundColor: '#202C45'
                      
                      // Example background color
                    }}
                  >
                    2018-19
                  </div>
                </div>
                {/* Add more years here */}
              </>
            ) : (
              cabinets[selectedYear].map((member, index) => (
                <div key={index} className="p-3 col-md-2 d-flex flex-column hoverShadow rounded col-sm-12">
                  <div
                    className="img mx-auto"
                    style={{ border: '1px solid #202c45', borderRadius: '5px' }}
                  >
                    <img
                      className="rounded object-fit-contain"
                      style={{ height: '200px' }}
                      src={member.img}
                      alt={member.name}
                    />
                  </div>
                  <div className="d-flex text-center flex-column discription">
                    <div className="name" style={{ textTransform: 'capitalize' }}>
                      {member.name}
                    </div>
                    <div style={{ textTransform: 'capitalize' }}>{member.role}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
    </div>
       
    );
}

export default Cabinet;