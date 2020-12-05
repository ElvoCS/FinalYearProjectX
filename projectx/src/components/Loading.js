import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/9981-cloud.json";
import "./Loading.css";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container__lottieLogo">
      <div className="lottie__logo">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
}

export default Loading;
