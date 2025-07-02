import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin5Line } from "react-icons/ri";

function card2() {
  return (
    <div className="w-full h-[130px] py-2 px-5  shadow-lg">
      <div className="w-[90%] h-full  gap-5 inline-flex">
        <div className="w-[60%] h-full overflow-hidden rounded-lg gap-[20px]">
          <img src={image1} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex-col gap-5">
          <div className="text-lg font-semibold text-black ">Pancake</div>
          <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg border-1 border-amber-600">
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-amber-600 hover:bg-gray-200">
              -
            </button>
            <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center  text-amber-600">
              1
            </span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center  text-amber-600  hover:bg-gray-200">
              +
            </button>
          </div>
        </div>
        <div className="w-[60%] h-full flex flex-col items-end p-5 gap-3.5">
          <span>RS 300/-</span>
          <RiDeleteBin5Line className="text-red-600" />
        </div>
      </div>
    </div>
  );
}

export default card2;
