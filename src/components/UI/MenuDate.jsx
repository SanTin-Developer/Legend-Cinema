import React from "react";
import { Link, Links } from "react-router-dom";

const MenuDate = () => {
  return (
    <>
      <div className="z-[calc(var(--index)+1000)] relative  flex max-w-8xl px-64 ml-6 gap-2  ">
        <Link to="/" className="cursor-pointer">
          <h2 className="text-white text-3xl font-sans">Now Showing</h2>
        </Link>
        <div className="w-0.5 bg-gray-600"></div>
        <Link to="/coming" className="cursor-pointer">
          <h2 className="text-gray-400 text-3xl font-sans">Coming Soon</h2>
        </Link>
      </div>
    </>
  );
};

export default MenuDate;
