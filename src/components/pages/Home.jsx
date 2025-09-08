import React from "react";
import LegendStyleHeroSlider from "../LegendStyleHeroSlider";
import LegendCarousel from "../LegendStyleHeroSlider";
import LegendStyleHeroSlider2 from "../LegendStyleHeroSlider2";
import MenuDate from "../UI/MenuDate";
import MenuDateSlider from "../UI/MenuDateSlider";
import Today from "../sections./Today";
import HomeFooterSlide from "../UI/HomeFooterSlide";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Background from "../UI/Background";

const Home = () => {
  return (
    <>
      <Header />
      <LegendStyleHeroSlider className="-z-10" />
      <LegendStyleHeroSlider2 className="-z-10" />
      <div className="  items-center h-[140rem] justify-center  saturate-50 brightness-50 mt-16 min-h-screen  bg-black sticky  ">
        <div className="bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[100%] blur-2xl "></div>
      </div>
      <div className=" mt-[-135rem] m-auto justify-center ">
        <MenuDate />
        <MenuDateSlider />
        <Today />
        <HomeFooterSlide />
      </div>
      <Footer />
    </>
  );
};

export default Home;
