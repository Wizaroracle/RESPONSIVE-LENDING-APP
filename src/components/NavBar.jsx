import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <div
      className=" h-24 text-white flex justify-between
     items-center max-w-310 mx-auto px-4 sticky top-0"
    >
      <h1
        className="w-full text-3xl 
      font-bold text-[#00df9a]"
      >
        REACT.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">HOME</li>
        <li className="p-4">COMPANY</li>
        <li className="p-4">RESOUCES</li>
        <li className="p-4">ABOUT</li>
        <li className="p-4">CONTACT</li>
      </ul>

      <div onClick={() => handleNav()} className="blocked md:hidden">
        {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>

      <div
        className={`fixed top-0 left-0 w-[60%] h-full
         border-r border-r-gray-900 bg-[#000300] px-4
        transition-transform ease-in-out duration-700
        ${nav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h1
          className="w-full text-3xl 
      font-bold text-[#00df9a] py-3"
        >
          REACT.
        </h1>
        <ul className="p-4">
          <li className="p-4 border-b border-gray-600">HOME</li>
          <li className="p-4 border-b border-gray-600">COMPANY</li>
          <li className="p-4 border-b border-gray-600">RESOUCES</li>
          <li className="p-4 border-b border-gray-600">ABOUT</li>
          <li className="p-4">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

/*
NOTES:
mx-auto - to make it center to the screen
*/
