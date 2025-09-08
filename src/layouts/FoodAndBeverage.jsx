import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Background from "../components/UI/Background";

import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import { IoIosArrowForward } from "react-icons/io";

const FoodAndBeverage = () => (
  <>
    <Header />
    <div>
      <div className="mt-[-160px] brightness-30 ">
        <img
          src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/40de4c72-907a-4120-b70a-cb475690f888.jpeg"
          alt="Promotion banner"
          className="bg-cover bg-fixed w-full h-[95vh]"
        />
      </div>
    </div>

    <span className="w-[140vh] h-[60vh] border-1 border-gray-700 rounded-xl flex m-auto brightness-100 justify-center mt-[-68vh]">
      <img
        src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/40de4c72-907a-4120-b70a-cb475690f888.jpeg"
        alt="Promotion Banner"
        className="w-[100%] rounded-xl "
      />
    </span>

    {/* Legend Cinema local */}
    <div className="flex -scale-z-50 mt-6 items-center h-[50rem] justify-center stroke-1 saturate-50  min-h-screen br bg-black sticky  bg-fixed ">
      <div className="absolute inset-60 bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[80%] blur-[190px]">
        <div className=" h-[100%] bg-black/50 z-20 backdrop:blur-sm"></div>
      </div>
    </div>
    <div className="  w-[1050px] m-auto ml-[240px]  absolute top-[92vh]">
      <h3 className="text-white ml-1  text-2xl font-semibold font:Poppins">
        Choose Cinema
      </h3>

      {/* Card of local */}
      {/* Card1 */}
      <div className="grid grid-cols-2 mt-10 gap-3">
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000013"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Cinema 271 Mega Mall
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-40 m-auto text-xl" />
        </div>

        {/* Card 2 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000012"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Cinema Sihanoukville
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-40 m-auto text-xl" />
        </div>

        {/* Card 3 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000014"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Eden Garden
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-58 m-auto text-xl" />
        </div>

        {/* Card4 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000009"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend K Mall
          </h2>
          <IoIosArrowForward className="text-gray-400  float-right ml-64 m-auto text-xl" />
        </div>

        {/* Card 5 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000006"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Meanchey
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-62 m-auto text-xl" />
        </div>

        {/* Card 6 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000008"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Midtown Mall
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-56 m-auto text-xl" />
        </div>

        {/* Card 7 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000007"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Noro Mall
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-64 m-auto text-xl" />
        </div>

        {/* Card8 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000011"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Olympia
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-64 m-auto text-xl" />
        </div>

        {/* Card9 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000005"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Premium Exchange Square
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-36 m-auto text-xl" />
        </div>

        {/* Card 10 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000010"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend SenSok
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-64 m-auto text-xl" />
        </div>

        {/* Card 11 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000001"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Siem Reap
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-62 m-auto text-xl" />
        </div>

        {/* Card 12 */}
        <div className="w-[68vh] h-[10vh] bg-black/15 p-1 flex rounded-md border-[0.5px] border-gray-700 cursor-pointer ">
          <img
            src="https://tickets.legend.com.kh/CDN/media/entity/get/CinemaGallery/0000000004"
            alt="choose local"
            className="w-[10vh] h-[8.8vh]  rounded-sm"
          />
          <h2 className="text-white text-[15px] ml-3 relative mt-[-2px]">
            Legend Toul Kork
          </h2>
          <IoIosArrowForward className="text-gray-400 ml-64 m-auto text-xl" />
        </div>
      </div>
    </div>

    <footer className="mt-[-30px]">
      <Footer />
    </footer>
  </>
);

export default FoodAndBeverage;
