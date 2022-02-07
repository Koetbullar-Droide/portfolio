import React from "react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";


// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'

// import required modules
import { Navigation, Pagination } from "swiper";

function Storypage() {
  return (
    <div className=" w-full h-screen pb-16 bg-gray-800 snap-center flex flex-col items-center">
        <div className="flex flex-row justify-center items-center h-[20vh]">
            <div className="avatar"></div>
            <h1 className=" ml-8 font-bold font-special text-white text-6xl"> My Projects</h1>
        </div>
        <Slider/>
      
    </div>
  );
}

function Slider () {
    return (
        <div className="w-[80%] ">
            <Swiper
            
            dir="rtl"
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <h2>Hello</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>Hello World</h2>
                </SwiperSlide>
            </Swiper>
        </div>
        
        
    );
}

export default Storypage;