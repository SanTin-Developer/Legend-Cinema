import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Background from "../components/UI/Background";

import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Offers = () => {
  return (
    <>
      <Header />
      <div>
        <div className="mt-[-160px] brightness-30 ">
          <img
            src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/0cdee12f-6a3f-4ae7-bd8f-354771668632.jpeg"
            alt="Promotion banner"
            className="bg-cover bg-fixed"
          />
        </div>
      </div>
      <span className="w-[140vh] border-1 border-gray-700 rounded-xl flex m-auto brightness-100 justify-center mt-[-68vh]">
        <img
          src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/0cdee12f-6a3f-4ae7-bd8f-354771668632.jpeg"
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
          Promotions:
        </h3>

        {/* Card of local */}
        {/* Card1 */}
        <div className="grid grid-cols-3 mt-10 gap-3">
          <div className="w-[44vh] h-[33vh] bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/f9f7cf67-20fc-45e6-9e38-d24aecee9fa1.jpeg"
              alt="Promotions"
              className="w-[44vh] h-[24vh] rounded-2xl"
            />
            <h2 className="text-white text-[15px] mt-2">
              Chocolate Popcorn Combo-New Flavor
            </h2>
          </div>

          {/* Card 2 */}
          <div className="w-[44vh] h-[33vh] bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/189fa652-6846-40a4-a7d9-03df5bbb1275.jpeg"
              alt="Promotion"
              className="w-[44vh] h-[24vh] rounded-2xl"
            />
            <h2 className="text-white text-[15px] mt-2">
              Unlock Incredible Perks with Legend Membership Card!
            </h2>
          </div>
          {/* Card 3 */}
          <div className="w-[44vh] h-[33vh] bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/24f5e3a1-3c99-4544-90d5-0f77be765276.jpeg"
              alt="Promotions"
              className="w-[44vh] h-[24vh] rounded-2xl"
            />
            <h2 className="text-white text-[15px] mt-2">
              Become a Legend Diamond Member Unlock a world of exclusivity
              and...
            </h2>
          </div>
          {/* Card4 */}
          <div className="w-[44vh] h-[33vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/5bb25e91-4c54-4dc4-acbb-a1c6f7474c9d.jpeg"
              alt="Promotions"
              className="w-[44vh] h-[24vh] rounded-2xl"
            />
            <h2 className="text-white text-[15px] mt-2">
              Let's enjoy the special price from Legend Toul Kork Cinema!
            </h2>
          </div>

          {/* Card 5 */}
          <div className="w-[44vh] h-[33vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/42704358-5548-4d22-aab5-023fe818d6a7.jpeg"
              alt="Promotions"
              className="w-[44vh] h-[24vh] rounded-2xl"
            />
            <h2 className="text-white text-[15px] mt-2">
              Special price for studens and senior citizen. Applicable on week
              days...
            </h2>
          </div>
        </div>
      </div>

      <footer className="mt-[-30px]">
        <Footer />
      </footer>
    </>
  );
};

export default Offers;
