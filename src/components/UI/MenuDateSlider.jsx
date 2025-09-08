import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Today from "../sections./Today";

export default function MenuDateSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper  max-w-[990px] h-24 gap-1 mt-8 "
      >
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl flex text-center justify-center m-auto content-center border-[2px] border-red-700 bg-black text-white">
          <div>
            <ul>
              <li className="text-gray-400">Today</li>
              <li className="font-bold text-[25px]">2</li>
              <li className="text-gray-400">Step</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="text-gray-400">Wes</li>
              <li className="font-bold text-[25px]">3</li>
              <li className="text-gray-400">Step</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="text-gray-400">Thu</li>
              <li className="font-bold text-[25px]">4</li>
              <li className="text-gray-400">Step</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="text-gray-400">Fri</li>
              <li className="font-bold text-[25px]">5</li>
              <li className="text-gray-400">Step</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="text-gray-400">Sat</li>
              <li className="font-bold text-[25px]">6</li>
              <li className="text-gray-400">Step</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="text-gray-400">Sun</li>
              <li className="font-bold text-[25px]">7</li>
              <li className="text-gray-400">Step</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl flex hover:border-white text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="text-gray-400">Mon</li>
              <li className="font-bold text-[25px]">7</li>
              <li className="text-gray-400">Step</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[40px] h-[20px] rounded-xl hover:border-white flex text-center justify-center m-auto content-center border-[1px] border-gray-700 bg-black text-white">
          <div>
            <ul>
              <li className="text-gray-400">Tus</li>
              <li className="font-bold text-[25px]">8</li>
              <li className="text-gray-400">Step</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
