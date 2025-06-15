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

const App = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 1000,      // Set autoplay speed (in milliseconds)
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '60px',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '60px',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '60px',
          infinite: true,
          dots: true
        }
      }
    ]
  };

  

  return (
    <div className="slider-container mb-20">
      <div className='mb-20'>
      <h1 className='lg:text-5xl text-3xl font-bold '>Infrastructure</h1>
      <hr className='border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3' />

      </div>
      <Slider {...settings}>
        <div className="slide ">
         
          <img src="https://images.unsplash.com/photo-1635625203639-b793c70ba6c9?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" className='z-[5] ' />
        </div>


        
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1635624219118-6cdac640af02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1636065991758-11065cbd50b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1639548538099-6f7f9aec3b92?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 4" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1611941671018-6c3907cb7a76?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 5" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1680084521631-e4e6d77704d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 6" />
        </div>
        <div className="slide">
          <img src="https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 7" />
        </div>
      </Slider>
    </div>
  );
};

export default App;
