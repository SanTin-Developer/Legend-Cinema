import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from "react";
import { Link, Links } from "react-router-dom";

import P1 from "../UI/ticketimage.png";

const HistoryTicket = () => {
  return (
    <>
      <Header />
      <div className="  items-center h-[40rem] mt-[-150px] justify-center  saturate-50 brightness-50    bg-black sticky  ">
        <div className="bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[100%] blur-2xl "></div>
      </div>
      <div className="absolute top-0 mt-50 w-full">
        <div className="z-[calc(var(--index)+1000)] relative  flex max-w-8xl px-60 gap-2  ">
          <Link to="/ticket">
            <span className="cursor-pointer">
              <h2 className="text-gray-400 text-4xl font-sans">Upcoming</h2>
            </span>
          </Link>
          <div className="w-0.5 bg-gray-600"></div>
          <Link to="/history">
            <span className="cursor-pointer">
              <h2 className="text-white text-4xl font-sans">History</h2>
            </span>
          </Link>
        </div>
        <span className="m-auto  flex justify-center w-full mt-30 ">
          <div>
            <img src={P1} alt="Ticket logo" className="w-80 " />
            <h2 className="text-white ml-14 text-2xl">No Past Tickets</h2>
          </div>
        </span>
      </div>
      <div className="mt-[-80px]">
        <div className="inset-0 bg-gradient-to-r h-[0.5px] from-black via-gray-500/50 to-black mt-7"></div>
        <Footer />
      </div>
    </>
  );
};

export default HistoryTicket;
