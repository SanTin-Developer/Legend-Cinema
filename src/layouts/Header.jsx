import { useState } from "react";
import { Link, Links } from "react-router-dom";
import { LanguageSelector } from "../components/Language-selector";
import { LocalSelector } from "../components/LocalSelector";
import TicketPage from "../components/pages/Ticket";

// Icon
import { IoMdSearch } from "react-icons/io";
import { HiTicket } from "react-icons/hi2";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

// Icon

// Image
import Logo from "../assets/Image/legendLogo.png";
import Home from "../components/pages/Home";
import MenuDate from "../components/UI/MenuDate";
import Ticket from "../components/pages/Ticket";
import Notifications from "../components/pages/Notifications";
import Menu from "./Menu";

function Header() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="h-36 sticky top-0 z-50">
        <div className="max-w-8xl bg-black/10 backdrop-blur-2xl  h-24 flex justify-between px-70  sticky top-0">
          <div className="flex items-center pointer-events-auto ">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="[&::-webkit-search-cancel-button]:hidden
         [&::-webkit-search-decoration]:hidden
         [&::-webkit-search-results-button]:hidden
         [&::-webkit-search-results-decoration]:hidden backdrop-blur-sm placeholder:text-gray-500 placeholder:text-[13px] bg-white/5 text-white border-[0.5px] border-gray-50 rounded-3xl focus:outline-none focus:ring-0 focus:border-gray-300 border-  h-9 w-56 px-4 "
              placeholder="Search Movies..."
            />
            <IoMdSearch className="absolute ml-48 h-5 w-5 text-gray-400" />
          </div>
          {/* Functions */}
          <div className="flex m-0 items-center ">
            {/* Logo */}
            <Link to={"/"}>
              <div className="w-40 flex ml-[-70vh] justify-center h-24 p-1">
                <img
                  src={Logo}
                  alt="legendCinema"
                  className="w-[60%] h-[40%] m-auto"
                />
              </div>
            </Link>

            {/* Buttom */}
            <div className="flex gap-2 ml-[-50vh]">
              {/* Buttom Ticket */}
              <Link to="/ticket">
                <div className="flex gap-2  bg-white/10 hover:border-gray-50 w-28 h-10 border-1 decoration-1 border-gray-400 rounded-3xl justify-center items-center cursor-default">
                  <HiTicket className="text-white text-xl" />
                  <h2 className="text-white text-sm  font-bold">Ticket</h2>
                </div>
              </Link>
              {/* Buttom Join Now */}
              <Link to="/joinnow">
                <div className="flex gap-2 bg-white/10 hover:border-gray-50  w-28 h-10 border-1 border-gray-400 rounded-3xl justify-center items-center cursor-default">
                  <RiAccountCircleFill className="text-white text-xl" />
                  <h2 className="text-white text-sm font-bold">Join Now</h2>
                </div>
              </Link>
              {/* Notification */}
              <div className="flex gap-2 z-50  w-10 h-10  rounded-3xl justify-center items-center cursor-default">
                <Notifications />
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[1px]  inset-0 bg-gradient-to-r from-black via-gray-400 to-black rounded-lg z-10"></div>

        {/* Menu */}
        <div className="flex px-64 h-12 items-center w-full justify-between cursor-default bg-black/10 backdrop-blur-2xl ">
          <Menu />
          {/* Location of cinema */}
          <span className="flex m-0 items-center ">
            <LocalSelector />
          </span>
        </div>

        {/* Change language */}
        <span className="right-[17rem] top-8 absolute">
          <LanguageSelector />
        </span>
      </div>
    </>
  );
}

export default Header;
