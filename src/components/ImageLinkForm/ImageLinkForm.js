import React from "react";
import "./ImageLinkForm.css";

const Navigation = () => {
  return (
    <div className="mt-10">
      <p className="text-xl text-center mb-3 font-semibold">
        Insert your picture URL below and this tool will detect faces in your
        picture!
      </p>
      <div className="center">
        <div className="form p-5 center rounded-lg shadow-md">
          <input
            className="text-xl w-1/2 rounded-tl-lg rounded-bl-lg"
            type="text"
          />
          <button className="p-2 text-xl text-white bg-indigo-500 rounded-tr-lg rounded-br-lg hover:scale-110 duration-100">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
