// Input.jsx
const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="w-[60vh] h-[6vh] border-[1px] border-white rounded-sm focus:outline-none focus:ring-0 px-10 text-white"
    />
  );
};
export default Input;
