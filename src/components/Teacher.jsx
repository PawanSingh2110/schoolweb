import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './component.css'; // Import the CSS file

const CustomPrevArrow = (props) => (
  <button
    className="slick-prev"
    onClick={props.onClick}
    aria-label="Previous"
    style={{
      width: '40px',
      height: '40px',
      backgroundColor: 'black',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
      padding:"20px"
    }}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: 'white', display: 'none' }} // Hide the SVG
    >
      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

const CustomNextArrow = (props) => (
  <button
    className="slick-next"
    onClick={props.onClick}
    aria-label="Next"
    style={{
      width: '40px',
      height: '40px',
      backgroundColor: 'black',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: 'white', display: 'none' }} // Hide the SVG
    >
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

const Teacher = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        
        focusOnSelect: true,
        autoplay: true,           // Enable autoplay
        autoplaySpeed: 2000,      // Set autoplay speed (in milliseconds)
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
      };
  return (
    <div className='teacher py-28 px-10'>
        <div className='mb-20'>
      <h1 className='lg:text-5xl text-white text-3xl font-bold '>School Faculties</h1>
      <hr className='border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3' />

      </div>
      <Slider {...settings}>
        <div className="slide ">
         
          <img src="https://images.unsplash.com/photo-1621982068749-d74c76e05720?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className='z-[5] ' />
          <h1 className='font-bold text-lg text-center'>Mr.Rahul Tripati</h1>
          <h1 className='font-bold text-lg text-center'>PRT</h1>
        </div>


        
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" />
          <h1 className='font-bold text-lg text-center'>Mrs.Sonali Rawat</h1>
          <h1 className='font-bold text-lg text-center'>PRT</h1>

        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" />
          <h1 className='font-bold text-lg text-center'>Mrs.Sakshi Pujari</h1>
          <h1 className='font-bold text-lg text-center'>PRT</h1>

        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 4" />
          <h1 className='font-bold text-lg text-center'>Mrs.Pooja Singh</h1>
          <h1 className='font-bold text-lg text-center'>PRT</h1>

        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 5" />
          <h1 className='font-bold text-lg text-center'>Mrs.Shravani Parab</h1>
          <h1 className='font-bold text-lg text-center'>PRT</h1>

        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 6" />
          <h1 className='font-bold text-lg text-center'>Mr.David D'souza</h1>
          <h1 className='font-bold text-lg text-center'>PRT</h1>

        </div>
        <div className="slide">
          <img src="https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=2048x2048&w=is&k=20&c=q-EcvtGhj2_Tf2w2-PVN4dZ4rjdhAprChJelEEz1oQA=" alt="Image 7" />
          <h1 className='font-bold text-lg text-center'>Mr.Pramod Singh</h1>
          <h1 className='font-bold text-lg text-center'>PRT</h1>

        </div>
      </Slider>

    </div>
  )
}

export default Teacher