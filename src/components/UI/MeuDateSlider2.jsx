import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Today from "../sections./Today";

export default function MenuDateSlider2() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper  max-w-[1040px] h-24 gap-1 mt-8"
      >
        <SwiperSlide className="w-[30px] h-[20px] rounded-xl flex text-center justify-center m-auto content-center border-[2px] border-red-700 bg-black text-white">
          <div>
            <ul>
              <li className="font-bold text-[20px]">September</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="font-bold text-[20px]">October</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="font-bold text-[20px]">November</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="font-bold text-[20px]">December</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="font-bold text-[20px]">January</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="font-bold text-[20px]">February</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
