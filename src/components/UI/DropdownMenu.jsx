import React, { createContext, useContext, useState } from "react";

// Context to manage dropdown state
const DropdownContext = createContext();

export function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block z-50 text-white">{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({ children }) {
  const { open, setOpen } = useContext(DropdownContext);
  return React.cloneElement(children, {
    onClick: () => setOpen(!open),
  });
}

export function DropdownMenuContent({ children, className = " z-50" }) {
  const { open } = useContext(DropdownContext);
  if (!open) return null;
  return (
    <div
      className={`absolute right-0 mt-2 bg-black border rounded-lg shadow-lg z-50 ${className}`}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, onClick, className = "z-50" }) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 cursor-pointer z-50 hover:bg-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({ children, className = "z-50" }) {
  return (
    <div className={`px-4 py-2 z-50 font-semibold text-gray-500 ${className}`}>
      {children}
    </div>
  );
}

export function DropdownMenuSeparator({ className = "" }) {
  return <div className={`border-t my-1 z-50 ${className}`} />;
}

export default DropdownMenu;
