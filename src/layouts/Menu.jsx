import React from "react";
import { NavLink } from "react-router-dom";

import { GoHomeFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";

const MenuBar = () => {
  const menuItems = [
    { to: "/", label: "Home", icon: <GoHomeFill size={20} /> },
    { to: "/cinemas", label: "Cinemas", icon: <FaLocationDot size={20} /> },
    { to: "/offers", label: "Offers", icon: <MdLocalOffer size={20} /> },
    {
      to: "/food&Beverage",
      label: "F&B",
      icon: <IoFastFoodSharp size={20} />,
    },
  ];

  return (
    <div className="flex space-x-6 p-4   text-white">
      {menuItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="flex  items-center gap-1 space-y-1 "
        >
          {({ isActive }) => (
            <>
              <span
                className={`transition ${
                  isActive ? "text-red-500" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default MenuBar;
