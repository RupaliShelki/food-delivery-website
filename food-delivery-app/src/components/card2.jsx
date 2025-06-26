import React from "react";
import image1 from "../assets/image1.avif"
function card2() {
  return (
    <div className="w-full h-[120px] bg-fuchsia-400 p-2 ">
      <div className="w-[60%] h-full bg-amber-50 flex">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image1} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex-col gap-5">
          <div className="text-lg text-gray-600 font-semibold">Pancake</div>
          <div className="w-[110px] h-[50px] bg-slate-400 flex">
            <button className="w-[30%] h-full bg-white flex justify-center items-center">-</button>
            <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center">1</span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center" >+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card2;
