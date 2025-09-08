import React from "react";
import { LanguageSelector } from "../Language-selector";
import { useState } from "react";
import { Link, Links } from "react-router-dom";
import { Import } from "lucide-react";

import Logo from "../../assets/Image/legendLogo.png";
import Hall from "../UI/hallCinema.png";
import LoginPage from "./LoginPage";

const JoinNow = () => {
  return (
    <>
      <div className="max-w-full bg-black/50 backdrop-blur-sm  h-24   px-60  sticky top-0">
        <div className="inset-0 bg-gradient-to-r h-[1px]  from-black via-gray-400 to-black absolute top-[90px]"></div>
        {/* Logo */}
        <Link to={"/"}>
          <div className="w-52 flex m-auto  h-24 p-1">
            <img
              src={Logo}
              alt="legendCinema"
              className="w-[70%] h-[50%] m-auto"
            />
          </div>
        </Link>
        <div className="ml-[65rem] max-w-full absolute top-6">
          <LanguageSelector />
        </div>
      </div>

      {/* Body of Join Now page */}

      <div
        className="h-screen w-full bg-cover bg-center mt-[-97px] "
        style={{ backgroundImage: `url(${Hall})` }}
      >
        <h1 className="text-white text-3xl text-center pt-14">Join Now Page</h1>
        <div className="max-w-full bg-black/20 backdrop-blur-sm  h-[87.5vh]  px-60 ">
          <span className="flex gap-2 relative top-10">
            <Link to="/">
              <h2 className="text-gray-400  hover:text-gray-200 hover:font-medium">
                Home
              </h2>
            </Link>
            <Link>
              <h2 className="text-gray-200 cursor-pointer hover:text-gray-600 font-medium hover:font-medium">
                / Log In
              </h2>
            </Link>
          </span>
          <LoginPage />
        </div>
      </div>
    </>
  );
};

export default JoinNow;
