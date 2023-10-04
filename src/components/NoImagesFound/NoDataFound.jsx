import React from "react";
import Lottie from "react-lottie";
import animationData from "./NoDataFound.json";


const NoDataFound = ({ text }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col h-96 w-96 text-center">
      <Lottie options={defaultOptions} />
      <div className="text-center font-bold text-violet-500">No {text} Found</div>
    </div>
  );
};

export default NoDataFound;
