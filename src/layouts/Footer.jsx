import React from "react";
import { Link, Links } from "react-router-dom";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { PiCopyrightBold } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="max-w-full bg-black h-[80vh]  pt-30  ">
        <div className="max-w-[1040px] gap-5  m-auto grid grid-cols-3">
          <div>
            <h2 className="text-white text-[25px] cursor-default">Company</h2>
            <ul className="mt-5 px-1">
              <li className="text-gray-300 hover:text-gray-100 cursor-pointer mt-2">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-gray-300 hover:text-gray-100 cursor-pointer mt-4">
                <Link to="/contact">Contac Us</Link>
              </li>
              <li className="text-gray-300 hover:text-gray-100 cursor-pointer mt-4">
                <Link to="/cinemas">Cinemas</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-[25px] cursor-default">More</h2>
            <ul className="mt-5 px-1">
              <li className="text-gray-300 hover:text-gray-100 cursor-pointer mt-2">
                <Link to="/offers">Promotions</Link>
              </li>
              <li className="text-gray-300 hover:text-gray-100 cursor-pointer mt-4">
                <Link to="/news-activity"> News & Activity</Link>
              </li>
              <li className="text-gray-300 hover:text-gray-100 cursor-pointer mt-4">
                <Link to="/ticket">My Ticket</Link>
              </li>
              <li className="text-gray-300 hover:text-gray-100 cursor-pointer mt-4">
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li className="text-gray-300 hover:text-gray-100 cursor-pointer mt-4">
                <Link to="/privacy-policy">Privacy & Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <span>
              <h2 className="text-white text-[25px] cursor-default">
                Download Our App
              </h2>
              <ul className="mt-5 px-1 flex gap-3">
                <li className="hover:border-gray-100 hover:bg-gray-800/50  border-gray-500 hover:text-gray-300 cursor-pointer mt-2 w-13 h-13 p-3 border-[1px] rounded-[50%]">
                  <img
                    src="https://i.pinimg.com/1200x/21/9e/37/219e37577ead177ec1162a79025bd95e.jpg"
                    alt="playstore"
                    className="  m-0 content-center items-center flex justify-center"
                  />
                </li>
                <li className="hover:border-gray-100 hover:bg-gray-800/50  border-gray-500 hover:text-gray-300 cursor-pointer mt-2 w-13 h-13 p-2 border-[1px] rounded-[50%]">
                  <img
                    src="https://i.pinimg.com/1200x/a7/8c/40/a78c406e4ad95f68bd8b014582ef3ece.jpg"
                    alt="Apple"
                    className="  m-0 content-center items-center flex justify-center"
                  />
                </li>
              </ul>
            </span>

            <span>
              <h2 className="text-white text-[25px] cursor-default  mt-8">
                Follow Our Social Media
              </h2>
              <ul className="mt-5 px-1 flex">
                <li className="hover:border-gray-100  m-auto justify-center flex items-center hover:bg-gray-800/50  border-gray-500 hover:text-gray-300 cursor-pointer mt-2 w-13 h-13 p-2 border-[1px] rounded-[50%]">
                  <FaFacebook className="text-white m-0 flex items-center text-2xl" />
                </li>
                <li className="hover:border-gray-100  m-auto justify-center flex items-center hover:bg-gray-800/50  border-gray-500 hover:text-gray-300 cursor-pointer mt-2 w-13 h-13 p-2 border-[1px] rounded-[50%]">
                  <FaInstagram className="text-white m-0 flex items-center text-2xl" />
                </li>
                <li className="hover:border-gray-100  m-auto justify-center flex items-center hover:bg-gray-800/50  border-gray-500 hover:text-gray-300 cursor-pointer mt-2 w-13 h-13 p-2 border-[1px] rounded-[50%]">
                  <FaYoutube className="text-white m-0 flex items-center text-2xl" />
                </li>
                <li className="hover:border-gray-100  m-auto justify-center flex items-center hover:bg-gray-800/50  border-gray-500 hover:text-gray-300 cursor-pointer mt-2 w-13 h-13 p-2 border-[1px] rounded-[50%]">
                  <FaTiktok className="text-white m-0 flex items-center text-2xl" />
                </li>
                <li className="hover:border-gray-100  m-auto justify-center flex items-center hover:bg-gray-800/50  border-gray-500 hover:text-gray-300 cursor-pointer mt-2 w-13 h-13 p-2 border-[1px] rounded-[50%]">
                  <FaTelegram className="text-white m-0 flex items-center text-2xl" />
                </li>
              </ul>
            </span>
          </div>
        </div>

        {/* Bank Banner */}
        <div className="max-w-[1040px] m-auto mt-2">
          <h2 className="text-white text-2xl cursor-default">Payment</h2>
          <div className="flex gap-24">
            <span>
              <img
                src="https://www.legend.com.kh/aba-payway-logo.png"
                alt="ABA bank"
                className="w-[240px]"
              />
            </span>
            <span>
              <img
                src="https://www.legend.com.kh/visa-logo.png"
                alt="Visa Card"
                className="w-[77px] mt-4"
              />
            </span>
            <span>
              <img
                src="https://www.legend.com.kh/mastercard-logo.png"
                alt="Master"
                className="w-[50px] mt-2"
              />
            </span>
          </div>
        </div>
        <div className="inset-0 bg-gradient-to-r h-[0.5px] from-black via-gray-500/50 to-black mt-7"></div>
        <span className="text-white flex m-auto justify-center gap-0.5 mt-10 ">
          All right reserved <PiCopyrightBold className="mt-1" /> 2025
        </span>
      </div>
    </>
  );
};

export default Footer;
