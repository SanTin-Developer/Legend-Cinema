// src/components/UI/Button.jsx
export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded focus:outline-none flex text-white focus:ring-0 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
