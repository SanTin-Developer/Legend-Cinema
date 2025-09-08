import React from "react";

import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const NewsActivity = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Header />
      <div>
        <div className="mt-[-160px] brightness-30 ">
          <img
            src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/5840e6b4-8923-4eee-894d-f98581885ad4.jpeg"
            alt="Cinemas Banner"
            className="bg-cover bg-fixed"
          />
        </div>
      </div>
      <span className="w-[140vh] border-1 border-gray-700 rounded-xl flex m-auto brightness-100 justify-center mt-[-68vh]">
        <img
          src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/5840e6b4-8923-4eee-894d-f98581885ad4.jpeg"
          alt="Cinemas Banner"
          className="w-[100%] rounded-xl "
        />
      </span>

      {/* Legend Cinema local */}
      <div className="flex -scale-z-50 items-center h-[65rem] justify-center stroke-1 saturate-50  min-h-screen br bg-black sticky  bg-fixed ">
        <div className="absolute inset-60 bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[80%] blur-[190px]">
          <div className=" h-[100%] bg-black/50 z-20 backdrop:blur-sm"></div>
        </div>
      </div>
      <div className="  w-[1050px] m-auto ml-[240px]  absolute top-[92vh]">
        <h3 className="text-white ml-1  text-2xl font-semibold font:Poppins">
          Publications:
        </h3>

        {/* Card of local */}

        {/* Card1 */}
        <div className="grid grid-cols-3 mt-10 gap-3">
          <div className="w-[44vh] h-[30vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/24ca3607-82de-4f7c-9a28-34fdd8a7d802.jpeg"
              alt="legend local"
              className="w-[44vh] h-[20vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Cinema Spreads Joy and Hope Through CSR: Free Screening of
              Karate...
            </h2>
          </div>

          {/* Card 2 */}
          <div className="w-[44vh] h-[30vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/b8b60908-3074-4117-971b-914f41d82de2.jpeg"
              alt="legend local"
              className="w-[44vh] h-[20vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Unlock Incredible Perks with Legend Membership Card!
            </h2>
          </div>
          {/* Card 3 */}
          <div className="w-[44vh] h-[30vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/1d1ce46b-20c7-4d33-aa58-667a1e64435a.jpeg"
              alt="legend local"
              className="w-[44vh] h-[20vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Cinemas Introduces Dual Premium Format ScreenX with
              Dolby...
            </h2>
          </div>
          {/* Card4 */}
          <div className="w-[44vh] h-[30vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/42e9253a-60af-443a-81f3-7679aa0bb0bc.jpeg"
              alt="Legend local"
              className="w-[44vh] h-[20vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Evolution of Cinema – Legend Cinema’s 13th Anniversary Celebration
            </h2>
          </div>

          {/* Card 5 */}
          <div className="w-[44vh] h-[30vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/cfb7d704-e28f-49b2-9248-ed965c847e8c.jpeg"
              alt="Legend Local"
              className="w-[44vh] h-[20vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              LCelebrating the 13th Anniversary of Legend Cinema Which is a
              cinema...
            </h2>
          </div>
          {/* Card 6 */}
          <div className="w-[44vh] h-[30vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/cd953020-91d0-4014-9596-07b071b2c235.jpeg"
              alt="Legend Local"
              className="w-[44vh] h-[20vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              "The Successor" Conserve, Create & Innovate
            </h2>
          </div>
          {/* Card 7 */}
          <div className="w-[44vh] h-[30vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/326c0b6c-2c0e-433a-82e9-6a0362fe0b79.jpeg"
              alt="Legend Local"
              className="w-[44vh] h-[20vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Indulge in Culinary Excellence with Legend Cinema Catering
              Service!
            </h2>
          </div>
          {/* Card 8 */}
          <div className="w-[44vh] h-[30vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/f080d6d0-b0f7-413c-8b7a-51e0999d17e4.jpeg"
              alt="Legend Local"
              className="w-[44vh] h-[20vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Legend Cinema Introduces the First Ever Dining Cinema Experience
              in Cambodia
            </h2>
          </div>
          {/* Card 9 */}
          <div className="w-[44vh] h-[30vh] mt-5 bg-black/15 p-2 rounded-xl border-[0.5px] border-gray-700 cursor-pointer ">
            <img
              src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/397f31f3-4afd-4d33-b87e-7dcd332885d8.png"
              alt="Legend Local"
              className="w-[44vh] h-[20vh] rounded-xl"
            />
            <h2 className="text-white font-sans font-light mt-2">
              Celebrating a 12 Years of Legend Cinema: A Business Success Story
              in the
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

export default NewsActivity;
