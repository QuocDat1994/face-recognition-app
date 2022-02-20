import React from "react";
import Tilt from "react-tilt";
import logo from "./logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="m-5 ml-10">
      <Tilt
        className="Tilt shadow-lg shadow-lg shadow-indigo-500/50 flex items-center justify-center"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner flex justify-center">
          <img src={logo} alt="logo" width="50%" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
