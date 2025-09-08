import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Background from "../components/UI/Background";

import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Cinemas = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Header />
      <div>
        <div className="mt-[-160px] brightness-30 ">
          <img
            src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/5840e6b4-8923-4eee-894d-f98581885ad4.jpeg"
            alt="Cinemas Banner"
            className="bg-cover bg-fixed backdrop:backdrop-blur-sm"
          />
        </div>
      </div>
      <span className="w-[130vh] rounded-xl flex m-auto brightness-100 justify-center mt-[-68vh]">
        <img
          src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/5840e6b4-8923-4eee-894d-f98581885ad4.jpeg"
          alt="Cinemas Banner"
          className="w-[100%] rounded-xl "
        />
      </span>

      {/* Legend Cinema local */}
      <div className="flex -scale-z-50 items-center h-[95rem] justify-center stroke-1 saturate-50  min-h-screen br bg-black sticky  bg-fixed ">
        <div className="absolute inset-60 bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[80%] blur-[190px]">
          <div className=" h-[100%] bg-black/50 z-20 backdrop:blur-sm"></div>
        </div>
      </div>
      <div className="  w-[990px] m-auto ml-[280px]  absolute top-[92vh]">
        <h3 className="text-white ml-1  text-2xl font-semibold font:Poppins">
          Cinema:
        </h3>
        <div className="relative mt-10">
          <input
            type="text"
            placeholder="Search Location..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-[970px] bg-stone-900/80 border border-stone-700/50 rounded-xl px-6 py-3 pr-12 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-600/50 focus:border-stone-600 transition-all duration-200 text-lg backdrop-blur-sm"
          />
          <IoMdSearch className="absolute right-10 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
        </div>

        {/* Card of local */}

        {/* Card1 */}
        <div className="grid grid-cols-3 mt-10 px-5">
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000013"
              alt="legend local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Cinema 271 Mega Mall{" "}
            </h2>
            <span className="flex text-[13px] mt-2 text-gray-400 gap-1">
              <FaLocationDot className="text-red-600 text-[18px]" />
              3rd Floor, Chip Mong Mega Mall,
            </span>
          </div>

          {/* Card 2 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000012"
              alt="legend local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Cinema Sihanoukvile
            </h2>
            <span className="flex mt-2  text-[13px]  text-gray-400 gap-1">
              <FaLocationDot className="text-red-600 text-[18px]" />
              PGB-5-021, 4th Floor of Prince
            </span>
          </div>
          {/* Card 3 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000014"
              alt="legend local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Eden Garden
            </h2>
            <span className="flex  text-[13px]  mt-2 text-gray-400 gap-1">
              <FaLocationDot className="text-red-600 text-[18px]" />
              City Center Boulevard, Sangkat Sra..
            </span>
          </div>
          {/* Card4 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000009"
              alt="Legend local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend K Mall
            </h2>
            <span className="flex mt-2  text-[13px]  text-gray-400 gap-1">
              <FaLocationDot className="text-red-600 text-[18px]" />
              2nd floor, K Mall
            </span>
          </div>

          {/* Card 5 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000006"
              alt="Legend Local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Meanchey
            </h2>
            <span className="flex mt-2  text-[13px]  text-gray-400 gap-1">
              <FaLocationDot className="text-red-600 text-[18px]" />
              3rd Floor of New Steung Mean Che...
            </span>
          </div>
          {/* Card 6 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000008"
              alt="Legend Local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Midtown Mall
            </h2>
            <span className="flex mt-2  text-[13px]  text-gray-400 gap-1">
              <FaLocationDot className="text-red-600 text-[18px]" />
              1st Floor Midtown Mall
            </span>
          </div>
          {/* Card 7 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000007"
              alt="Legend Local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Noro Mall
            </h2>
            <span className="flex mt-2  text-[13px]  text-gray-400 gap-1">
              <FaLocationDot className="text-red-600 text-[18px]" />
              5th floor, Chip Mong Noro Mall
            </span>
          </div>
          {/* Card 8 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000011"
              alt="Legend Local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Olympia
            </h2>
            <span className="flex mt-2  text-[13px]  text-gray-400 gap-1">
              <FaLocationDot className="text-red-600 text-[18px]" />
              6th Floor,The Olympia Mall
            </span>
          </div>
          {/* Card 9 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000005"
              alt="Legend Local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Premium Exchange Square
            </h2>
            <span className="flex mt-2 text-gray-400 gap-1  text-[13px] ">
              <FaLocationDot className="text-red-600 text-[18px]" />
              Street 106, Corner of Street 61
            </span>
          </div>
          {/* Card 10 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000010"
              alt="Legend Local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend SenSok
            </h2>
            <span className="flex mt-2 text-gray-400  text-[13px]  gap-1">
              <FaLocationDot className="text-red-600 text-[18px]" />
              4th Floor, Chip Mong SenSok Mall
            </span>
          </div>
          {/* Card 11 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000001"
              alt="Legend Local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Siem Reap
            </h2>
            <span className="flex mt-2 text-gray-400 gap-1  text-[13px] ">
              <FaLocationDot className="text-red-600 text-[18px]" />
              Level 3, The Heritage Walk, Corner...
            </span>
          </div>
          {/* Card 12 */}
          <div className="w-[40vh] h-[41vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000004"
              alt="Legend Local"
              className="w-[44vh] h-[30vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Toul Kork
            </h2>
            <span className="flex mt-2 text-gray-400 gap-1  text-[13px] ">
              <FaLocationDot className="text-red-600 text-[18px]" />
              TK Avenue Mall, Street 315
            </span>
          </div>
        </div>
      </div>

      <footer className="mt-[-60px]">
        <Footer />
      </footer>
    </>
  );
};

export default Cinemas;
