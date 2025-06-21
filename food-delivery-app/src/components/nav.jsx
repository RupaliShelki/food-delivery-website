import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";

function nav() {
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-30 ">
      <div className="w-18 h-18 bg-white flex justify-center items-center rounded-md  shadow-md">
        <IoFastFoodOutline className="w-[30px] h-[30px]" />
      </div>
      <form action="" className="bg-slate-50 w-[940px] h-[70px] rounded-md flex items-center px-[10px] gap-[20px] shadow-md ">
        <IoIosSearch className="w-[30px] h-[30px]"/>
        <input type="text" placeholder="search item..."  className="w-[100%] outline-none" />
      </form>
      <div className="w-18 h-18 bg-white flex justify-center items-center rounded-md shadow-md relative ">
        <span className=" absolute top-0 right-4 font-bold">0</span>
        <LuShoppingBag className="w-[30px] h-[30px]" />
      </div>
    </div>
  );
}

export default nav;
