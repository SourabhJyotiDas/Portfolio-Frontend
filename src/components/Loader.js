import React from "react";

const Loader = ({ message }) => {

  return (
    <div className="h-[100vh] w-[100%] flex flex-col items-center justify-center ">
      <div className="text-center text-2xl md:text-base">{message}...</div>
      <div className="text-xs md:text-sm">Please wait</div>
    </div>
  );
};

export default Loader;
