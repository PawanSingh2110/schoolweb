import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 10, zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 10, zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

function SlideBtnOne() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1533854775446-95c4609da544?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://plus.unsplash.com/premium_photo-1665520346896-784e4945f09d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1446329360995-b4642a139973?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1598981457915-aea220950616?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

function SlideBtnTwo() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1594818379784-2a9c9d64be16?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://plus.unsplash.com/premium_photo-1671466192305-8d0d6b0115e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1512746804203-e53e69406f93?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1528024719646-5360a944bd74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://plus.unsplash.com/premium_photo-1684902597942-d6593a476d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://plus.unsplash.com/premium_photo-1708696237348-74a10a04a41a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

function SlideBtnThree() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1643199032520-99230e970fb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://plus.unsplash.com/premium_photo-1690479510760-8eac07e3ae64?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="infraSlide">
          <img
            src="https://images.unsplash.com/photo-1689150571822-1b573b695391?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

function SlideBtnFour() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="infraSlide">
          <img src="https://plus.unsplash.com/premium_photo-1661306499492-297866c7f2a0?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </div>
        <div className="infraSlide">
          <img src="https://images.unsplash.com/photo-1475906089153-644d9452ce87?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://images.unsplash.com/photo-1524684009724-bee13ad8305f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://images.unsplash.com/photo-1639772823907-a716be4bdecc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://images.unsplash.com/photo-1616046560582-41ac3c954715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJpb2xvZ3klMjBsYWJ8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
      </Slider>
    </div>
  );
}

function SlideBtnFive() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="infraSlide">
          <img src="https://images.unsplash.com/photo-1667995508178-e24e78cd944c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </div>
        <div className="infraSlide">
          <img src="https://plus.unsplash.com/premium_photo-1661603887154-cb5f58a51768?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://images.unsplash.com/photo-1583912267410-423b923daf61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://plus.unsplash.com/premium_photo-1661437873777-f2e498a6f591?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://images.unsplash.com/photo-1614283226124-5a2f0f23752b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://plus.unsplash.com/premium_photo-1664298632492-c8be02c3db5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </Slider>
    </div>
  );
}

function SlideBtnSix() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="infraSlide">
          <img src="https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1072472594/photo/students-learning-computer-programming-stock-image.jpg?s=2048x2048&w=is&k=20&c=-qHxY4_9qiHYYoW6xzzpwroF8KEw6Bz10tuJCFeOn5A=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1410480083/photo/excited-young-students.jpg?s=612x612&w=0&k=20&c=XP3zYhg6UhALxKq7uyHYtzPm2WGLD5PYFkpSH-RGBBc=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1163985031/photo/indian-teacher-helping-students-at-computer-class.jpg?s=612x612&w=0&k=20&c=tO9NNWbV6JIYUeYEYEvSpWJGa-DNGdSZ5bYk0GF7OvY=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1072466024/photo/students-learning-computer-programming-stock-image.jpg?s=612x612&w=0&k=20&c=GbeKT2zE0jeiZIBifGa5uE5ywOgcYh6jVgOCYEvksec=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1072465010/photo/students-learning-computer-programming-stock-image.jpg?s=612x612&w=0&k=20&c=JXkfaxy863CYoOFHHNCHHbe8Kfi23pHdNTcV2lYEQR8=" alt="" />
        </div>
      </Slider>
    </div>
  );
}

function SlideBtnSeven() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1442238908/photo/modern-library-interior.jpg?s=612x612&w=0&k=20&c=8ViSs9jlfSLMDTmWxoCJfMgZS7grkvT8tgC0UOZVi_Q=" alt=""/>
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1453081662/photo/bookstore-in-the-city-center-of-lisbon.jpg?s=612x612&w=0&k=20&c=QR3TP0tZZnP7UWT9CK7OV68WCyAtqe0QXiiH45ryViU=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1149064165/photo/asian-women-are-picking-up-books-on-the-bookshelf-to-prepare-to-back-to-school.jpg?s=612x612&w=0&k=20&c=R15oJfXls8aB9OR4evRFI9ukvyFI6fHKnand6nF0Xqw=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1248521772/photo/gifted-black-girl-uses-laptop-writes-notes-for-the-paper-essay-study-for-class-assignment.jpg?s=612x612&w=0&k=20&c=A0edhfi3pw8twj7mrANFmQ0V_opWS72k7cgMr0NyoZI=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/871461580/photo/diverse-education-shoot.jpg?s=612x612&w=0&k=20&c=-d-isWeP9v9h32DDH2ChRgtfEbZcPiMYn2_Hz68iNek=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1193287049/photo/bookshelves-in-modern-public-library.jpg?s=612x612&w=0&k=20&c=Ri3YI-iK_uo9SMzvJ_Z2La_D0kHJPS8ZK1ziXWTDya0=" alt="" />
        </div>
      </Slider>
    </div>
  );
}


function SlideBtnEight() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/982492944/photo/electricity-experiment.jpg?s=612x612&w=0&k=20&c=gJY8wpW-xL_AfzWzQYwKWAdoVd2V9BHboyzPU01PTJs=" alt=""/>
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/936903524/vector/blackboard-inscribed-with-scientific-formulas-and-calculations-in-physics-and-mathematics-can.jpg?s=612x612&w=0&k=20&c=sRLsJbHUVOYvZ_M16hti4fF9NM0RysfjAPUQrCJ8o4U=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/1128670108/photo/scientist-work-with-laser-machine-or-system-b.jpg?s=612x612&w=0&k=20&c=4vKzafML2KkQHSlKjnj8twCkcesfUWPYcW0Q3E-3sA4=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/538887450/photo/eletronic-experiment-observation-physics-study-concept.jpg?s=612x612&w=0&k=20&c=sWYjW2bwH-wVW7Wu6cFYoUaQ5t3bXvfQu5ju_WHzv5g=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/492365718/photo/electric-motor-in-a-laboratory.jpg?s=612x612&w=0&k=20&c=uAdgfarJ00Kx8p-fBrh75kUuZZ8hX_nQWdauudEz7Yk=" alt="" />
        </div>
        <div className="infraSlide">
          <img src="https://media.istockphoto.com/id/589961480/photo/galvanometer-in-lab-illuminated-with-neon-light.jpg?s=612x612&w=0&k=20&c=o5cz8AlCoG3AbuLorT2lN0aJJPk3mgBCLPAoScP8KRs=" alt="" />
        </div>
      </Slider>
    </div>
  );
}



const Infrastructure = () => {
  
  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (button) => {
    
    setActiveButton(button === activeButton ? null : button);
  };

  return (
    <>
      <div className="title w-full h-48 py-10 text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center">About</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> About Us <FaArrowRight />{" "}
          <span className="font-medium"> Infrastructure</span>{" "}
        </h1>
      </div>

      <div className="p-2 xl:p-20">
        <h1 className="text-4xl font-medium text-[#333333]">INFRASTRUCTURE</h1>
        <div className="border-b-4 border-[#202C45] w-[5vw] mt-5"></div>

        <div className="mt-5">
          <div className="flex flex-wrap space-x-2">
            <button
              onClick={() => handleClick("button1")}
              className={`px-4 py-2  font-medium rounded ${
                activeButton === "button1"
                  ? "bg-[#202C45] text-white"
                  : "bg-white text-[#202C45]"
              } `}
            >
              School Building
            </button>

            <button
              onClick={() => handleClick("button2")}
              className={`px-4 py-2  font-medium rounded ${
                activeButton === "button2"
                  ? "bg-[#202C45] text-white"
                  : "bg-white text-[#202C45]"
              }`}
            >
              Sports Ground
            </button>

            <button
              onClick={() => handleClick("button3")}
              className={`px-4 py-2  font-medium rounded ${
                activeButton === "button3"
                  ? "bg-[#202C45] text-white"
                  : "bg-white text-[#202C45]"
              }`}
            >
              Auditorium
            </button>

            <button
              onClick={() => handleClick("button4")}
              className={`px-4 py-2  font-medium rounded ${
                activeButton === "button4"
                  ? "bg-[#202C45] text-white"
                  : "bg-white text-[#202C45]"
              }`}
            >
              Biology Lab
            </button>

            <button
              onClick={() => handleClick("button5")}
              className={`px-4 py-2  font-medium rounded ${
                activeButton === "button5"
                  ? "bg-[#202C45] text-white"
                  : "bg-white text-[#202C45]"
              }`}
            >
              Chemistry Lab
            </button>

            <button
              onClick={() => handleClick("button6")}
              className={`px-4 py-2  font-medium rounded ${
                activeButton === "button6"
                  ? "bg-[#202C45] text-white"
                  : "bg-white text-[#202C45]"
              }`}
            >
              Computer Lab
            </button>

            <button
              onClick={() => handleClick("button7")}
              className={`px-4 py-2  font-medium rounded ${
                activeButton === "button7"
                  ? "bg-[#202C45] text-white"
                  : "bg-white text-[#202C45]"
              }`}
            >
              Library
            </button>

            <button
              onClick={() => handleClick("button8")}
              className={`px-4 py-2  font-medium rounded ${
                activeButton === "button8"
                  ? "bg-[#202C45] text-white"
                  : "bg-white text-[#202C45]"
              }`}
            >
              Physics Lab
            </button>
          </div>

          {activeButton === "button1" && (
            <div className="mt-4">
              <SlideBtnOne />
            </div>
          )}

          {activeButton === "button2" && (
            <div className="mt-4">
              <SlideBtnTwo />
            </div>
          )}

          {activeButton === "button3" && (
            <div className="mt-4">
              <SlideBtnThree />
            </div>
          )}

{activeButton === "button4" && (
            <div className="mt-4">
              <SlideBtnFour />
            </div>
          )}

{activeButton === "button5" && (
            <div className="mt-4">
              <SlideBtnFive/>
            </div>
          )}

{activeButton === "button6" && (
            <div className="mt-4">
              <SlideBtnSix/>
            </div>
          )}

{activeButton === "button7" && (
            <div className="mt-4">
              <SlideBtnSeven/>
            </div>
          )}

{activeButton === "button8" && (
            <div className="mt-4">
              <SlideBtnEight/>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Infrastructure;
