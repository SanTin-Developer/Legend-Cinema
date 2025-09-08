import React from "react";

const Background = () => {
  return (
    <div className=" flex -scale-z-50 items-center h-[170rem] justify-center stroke-1 saturate-50  min-h-screen br bg-black sticky  bg-fixed ">
      <div className="absolute inset-60 bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[100%] blur-[190px]">
        <div className=" h-[100%] bg-black/50 z-20 backdrop:blur-sm"></div>
      </div>
    </div>
  );
};

export default Background;
