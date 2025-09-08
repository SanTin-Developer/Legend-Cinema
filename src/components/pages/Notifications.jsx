import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";

import pic1 from "../UI/notifiationsLogo.png";

export default function Notifications() {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center mt-[0vh] justify-center   text-white">
        {/* Button to toggle content */}
        <button
          onClick={() => setShowContent(!showContent)}
          className="flex gap-2 bg-white/10 hover:border-gray-50  w-10 h-10 border-1 border-gray-400 rounded-3xl justify-center items-center cursor-default"
        >
          <IoNotifications className="text-white text-xl" />
        </button>
      </div>
      {/* Hidden content */}
      {showContent && (
        <div className="mt-[580px] border-[1px] border-gray-500 h-[50vh] absolute p-4 bg-black rounded-xl shadow-lg w-[60vh]">
          <h2 className="text-xl font-bold text-white ">Notifications</h2>
          <div className="flex justify-center m-auto mt-5">
            <img
              src={pic1}
              alt="legendCinema"
              className="w-[40%] h-[50%] m-auto"
            />
          </div>
          <p className="text-white text-md text-center">
            You don't have account yet. please create one
          </p>
        </div>
      )}
    </>
  );
}
