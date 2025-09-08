import React from "react";
import Header from "../../layouts/Header";
import LegendStyleHeroSlider from "../LegendStyleHeroSlider";
import LegendStyleHeroSlider2 from "../LegendStyleHeroSlider2";
import MenuDate from "../UI/MenuDate";
import MenuDateSlider2 from "../UI/MeuDateSlider2";
import { Link } from "react-router-dom";
import MovieComing from "../sections./MovieComing";
import Footer from "../../layouts/Footer";
import HomeFooterSlide from "../UI/HomeFooterSlide";

const ComingPage = () => {
  return (
    <>
      <Header />
      <LegendStyleHeroSlider />
      <LegendStyleHeroSlider2 />
      <div className="  items-center h-[140rem] justify-center  saturate-50 brightness-50 mt-16 min-h-screen  bg-black sticky  ">
        <div className="bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[100%] blur-2xl "></div>
      </div>
      <div className=" mt-[-135rem] m-auto justify-center ">
        <div className="z-[calc(var(--index)+1000)] relative  flex max-w-8xl px-60 gap-2  ">
          <Link to="/" className="cursor-pointer">
            <h2 className="text-gray-400 text-4xl font-sans">Now Showing</h2>
          </Link>
          <div className="w-0.5 bg-gray-600"></div>
          <Link to="/coming" className="cursor-pointer">
            <h2 className="text-white text-4xl font-sans">Coming Soon</h2>
          </Link>
        </div>
        <MenuDateSlider2 />
        <MovieComing />
        <HomeFooterSlide />
      </div>
      <Footer />
    </>
  );
};

export default ComingPage;
