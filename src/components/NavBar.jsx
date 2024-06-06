import React from "react";

const NavBar = () => {
  return (
<div className="navbar  border-b-[1px] border-[#E6AC18] text-[#CFCFCF] bg-[#212121] font-bricolage px-[10rem]">
  <div className="flex-1">

    <a className="btn btn-ghost text-[2rem] hover:bg-[#E6AC18] ">ReactHub</a>
  </div>
  <div className=" w-full px-12 flex justify-start items-center ">
    <ul className="menu menu-horizontal px-1 gap-[0.8rem] text-[1.2rem]">
      <li><a className="hover:bg-[#E6AC18] ">Pricing</a></li>
      <li><a className="hover:bg-[#E6AC18] ">Demo</a></li>
      <li><a className="hover:bg-[#E6AC18] ">Wall of love</a></li>
      <li><a className="hover:bg-[#E6AC18] ">Leaderboard</a></li>
     
    </ul>
  </div>
</div>
  );
};

export default NavBar;
