import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";

function nav() {
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-30 md-px-8 ">
      <div className="w-18 h-18 bg-white flex justify-center items-center rounded-md  shadow-md">
        <IoFastFoodOutline className="w-[30px] h-[30px]" />
      </div>
      <form action="" className="bg-slate-50 w-[40%] h-[70px] rounded-md flex items-center px-[10px] gap-[20px] shadow-md  md:w-[70%]">
        <IoIosSearch className="w-[30px] h-[30px]"/>
        <input type="text" placeholder="search item..."  className="w-[100%] outline-none" />
      </form>
      <div className="w-18 h-18 bg-white flex justify-center items-center rounded-md shadow-md relative text-[16px] md:text-[20px] ">
        <span className=" absolute top-0 right-4 font-bold">0</span>
        <LuShoppingBag className="w-[30px] h-[30px]" />
      </div>
    </div>
  );
}

export default nav;
