import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div>
      <div className=" p-10 ">
        <h1 className="lg:text-4xl text-black text-3xl font-bold ">
          Testimonials
        </h1>
        <hr className="border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3" />
      </div>
      <Swiper
        spaceBetween={30}
        autoHeight={true}
        slidesPerView={4}
        navigation={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          435: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper p-7 w-[95%]   xl:w-[80%] mb-20"
      >
        <SwiperSlide>
            <div className=" shadow-md rounded-2xl">
                <p className="p-4 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam, quos est facere culpa, eaque dolore dicta consequatur omnis quasi eius deserunt earum eveniet nam nobis magnam ex consequuntur cum.</p>
            </div>
            <div className="flex items-center mt-3">
                <img src="https://images.unsplash.com/photo-1722353619595-b4761dce43c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 rounded-full boeder-2 border-black p-1" />
                <div className="ml-5">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <h1>Client, 2022</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" shadow-md rounded-2xl">
        <p className="p-4 text-start">Lorem ipsum dolor sit amet consectetur culpa, eaque dolore dicta consequatur  adipisicing elit. Atque totam, quos est facere culpa, eaque dolore dicta consequatur omnis quasi eius deserunt earum eveniet nam nobis magnam ex consequuntur cum.</p>
        </div>
            <div className="flex items-center mt-3">
                <img src="https://plus.unsplash.com/premium_photo-1722519249629-1282c3d7b0a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 rounded-full boeder-2 border-black p-1" />
                <div className="ml-5">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <h1>Client, 2022</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex items-center mt-3">
        <p className="p-4 text-start">Lorem ipsum dolor sit amet consectetur culpa, eaque dolore dicta consequatur  adipisicing elit. Atque totam, quos est facere culpa, eaque dolore dicta consequatur omnis quasi eius deserunt earum eveniet nam nobis magnam ex consequuntur cum.</p>
        </div>
        <div className="flex items-center mt-3">
        <img src="https://images.unsplash.com/photo-1722110719834-c871da2868cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 rounded-full boeder-2 border-black p-1" />
                <div className="ml-5">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <h1>Client, 2022</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" shadow-md rounded-2xl">
        <p className="p-4 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam, quos est facere culpa, eaque dolore dicta consequatur omnis quasi eius deserunt earum eveniet nam nobis magnam ex consequuntur cum.</p>
        </div>
        <div className="flex items-center mt-3">
        <img src="https://images.unsplash.com/photo-1722403639864-046bfe5288ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 rounded-full boeder-2 border-black p-1"/>
                <div className="ml-5">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <h1>Client, 2022</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" shadow-md rounded-2xl">
        <p className="p-4 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam, quos est facere culpa, eaque dolore dicta consequatur culpa, eaque dolore dicta consequatur  omnis quasi eius deserunt earum eveniet nam nobis magnam ex consequuntur cum.</p>
        </div>
        <div className="flex items-center mt-3">
        <img src="https://images.unsplash.com/photo-1722353619595-b4761dce43c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 rounded-full boeder-2 border-black p-1"/>
                <div className="ml-5">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <h1>Client, 2022</h1>
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Review;
