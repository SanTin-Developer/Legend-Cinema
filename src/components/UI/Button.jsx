import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-3 py-2  flex items-center z-50  gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
