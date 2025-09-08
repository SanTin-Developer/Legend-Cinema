import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Info, Settings, Phone } from "lucide-react"; // icons

const MenuBar = () => {
  const menuItems = [
    { to: "/", label: "Home", icon: <Home size={24} /> },
    { to: "/about", label: "About", icon: <Info size={24} /> },
    { to: "/services", label: "Services", icon: <Settings size={24} /> },
    { to: "/contact", label: "Contact", icon: <Phone size={24} /> },
  ];

  return (
    <div className="flex space-x-6 p-4 bg-gray-900 text-white">
      {menuItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="flex flex-col items-center space-y-1"
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
