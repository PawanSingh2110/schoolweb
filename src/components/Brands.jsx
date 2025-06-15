// ImageSlider.js
import React from "react";
import Slider from "react-slick";
import Brand from "../assets/brand1.png";
import Brand1 from "../assets/brand2.png";
import Brand2 from "../assets/brand3.png";
import Brand3 from "../assets/brand4.png";
import Brand4 from "../assets/brand5.png";
import Brand5 from "../assets/brand6.png";

const ImageSlider = () => {
  const settings = {
    dots: false, // Hide pagination
    arrows: false, // Hide navigation arrows
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
         
        },
      },
    ],
  };

  return (
    <div>
      

      <div className="w-[80%] mx-auto py-10">
      <div className=" py-8">
        <h1 className="lg:text-4xl text-3xl font-bold ">Associated With</h1>
        <hr className="border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3" />
      </div>
        <Slider {...settings}>
          <div>
            <img src={Brand} alt="Slide 1" />
          </div>
          <div>
            <img src={Brand1} alt="Slide 2" className="w-60 mt-4" />
          </div>
          <div>
            <img src={Brand2} alt="Slide 3" />
          </div>
          <div>
            <img src={Brand3} alt="Slide 4" />
          </div>
          <div>
            <img src={Brand4} alt="Slide 5" />
          </div>
          <div>
            <img src={Brand5} alt="Slide 6" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
