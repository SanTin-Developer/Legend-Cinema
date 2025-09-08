import React from "react";
import { Link, Links } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

// image icon
import p1 from "../../assets/Image/telephone-call.png";
import p2 from "../../assets/Image/message.png";
import p3 from "../../assets/Image/at-sign.png";

const Contact = () => {
  return (
    <>
      <Header />
      <div>
        <div className="mt-[-160px] brightness-30 ">
          <img
            src="https://www.legend.com.kh/contact-hero.jpg"
            alt="About Banner"
            className="bg-cover bg-fixed"
          />
        </div>
      </div>
      <span className="w-[130vh]  rounded-xl flex m-auto brightness-100 justify-center mt-[-68vh]">
        <img
          src="https://www.legend.com.kh/contact-hero.jpg"
          alt="About Banner "
          className="w-[100%] rounded-xl "
        />
      </span>
      {/* Background Web page */}
      <div className="flex -scale-z-50 items-center h-[100vh] justify-center stroke-1 saturate-50   bg-black sticky  bg-fixed ">
        <div className="absolute inset-60 bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[50%] blur-[190px]">
          <div className=" h-[100%] bg-black/50 z-20 backdrop:blur-sm"></div>
        </div>
      </div>
      <span className="gap-2 ml-72 absolute top-[86vh]">
        <Link to="/" className=" text-gray-300 text-[15px] hover:text-gray-50">
          Home
        </Link>
        <Link className="text-white  ">/ Contact Us</Link>
      </span>

      {/* Boddy of About Page */}
      <nav className="absolute top-[80vh] w-full  mt-20 flex justify-center ">
        {/* Content for about us */}
        <div>
          <h2 className="text-white mt-9 text-3xl font-bold ">Contact Info</h2>
          <div className="grid grid-cols-2 w-[990px]">
            <div className="w-[90%] bg-black/20 rounded-2xl h-[55vh] mt-9 border-[1px]  border-gray-900">
              <header className="w-full bg-gray-400/70 h-[9vh] font-bold text-2xl px-4 rounded-t-2xl text-white m-auto flex items-center">
                Hotline
              </header>
              <nav className="grid grid-rows-3 px-4 m-auto ">
                <span className="bg-white/10 mt-10 h-[9vh] rounded-md flex items-center px-3 gap-4 cursor-pointer ">
                  <img src={p1} alt="icon" className="w-10" />
                  <h4 className="text-white">081 300 400</h4>
                </span>
                <span className="bg-white/10 mt-7 h-[9vh] rounded-md flex items-center px-3 gap-4  cursor-pointer">
                  <img src={p2} alt="icon" className="w-10" />
                  <h4 className="text-white">Messenger</h4>
                </span>
                <span className="bg-white/10 mt-4 h-[9vh] rounded-md flex items-center px-3 gap-4  cursor-pointer">
                  <img src={p3} alt="icon" className="w-10" />
                  <h4 className="text-white">info@legend.com.kh</h4>
                </span>
              </nav>
            </div>
            {/* culom2 */}
            <div className="w-[90%] bg-black/20 mt-10 rounded-2xl h-[55vh] border-[1px]  border-gray-900">
              <header className="w-full bg-gray-400/70 h-[9vh] font-bold text-2xl px-4 rounded-t-2xl text-white m-auto flex items-center">
                Advertising & Partnership
              </header>
              <nav className="grid grid-rows-3 px-4 m-auto ">
                <span className="bg-white/10 mt-10 h-[9vh] rounded-md flex items-center px-3 gap-4 cursor-pointer ">
                  <img src={p1} alt="icon" className="w-10" />
                  <h4 className="text-white">087 888 045</h4>
                </span>

                <span className="bg-white/10 mt-4 h-[9vh] rounded-md flex items-center px-3 gap-4  cursor-pointer">
                  <img src={p3} alt="icon" className="w-10" />
                  <h4 className="text-white">sales@legend.com.kh</h4>
                </span>
              </nav>
            </div>
          </div>
        </div>
      </nav>
      <footer className="mt-[-50px]">
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
