import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
// import { Component } from "react";
// import Greet from "./greeting-01.svg"

//for animated svgs use json file
export default function HomeImg() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      width: 10,
      animationData: require("./HomeImg.json"),
    });
  }, []);
  return (
    <div className="App">
      <div className="container-img" ref={container}></div>
    </div>
  );
}