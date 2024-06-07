import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar z-10  border-b-[1px] gap-[4rem] border-[#E6AC18] text-[#CFCFCF] bg-[#212121] font-bricolage px-[2rem] md:px-[8rem] relative">
      <div className="flex lg:w-fit w-full justify-between">
        <a className="text-[2rem] p-2">ReactHub</a>
        <button
          className="block md:hidden focus:outline-none    "
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-[#CFCFCF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`absolute top-full left-0 w-full bg-[#212121] md:relative md:top-0 md:flex md:justify-start md:items-center  ${isOpen ? 'block border-b-[1px] border-[#E6AC18]'  : 'hidden'}`}
      >
        <ul className="menu flex flex-col md:flex-row md:gap-[0.8rem] md:text-[1.2rem] p-4 md:p-0">
          <li><a className="hover:bg-[#E6AC18] p-2">Pricing</a></li>
          <li><a className="hover:bg-[#E6AC18] p-2">Demo</a></li>
          <li><a className="hover:bg-[#E6AC18] p-2">Wall of love</a></li>
          <li><a className="hover:bg-[#E6AC18] p-2">Leaderboard</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
