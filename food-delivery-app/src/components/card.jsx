import React from "react";
import image1 from "../assets/image1.avif";
import { LuVegan } from "react-icons/lu";

function card() {
  return (
    <div className="w-[280px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3">
      <div  className="w-[100%] h-[60%] overflow-hidden object-cover ">
        <img src={image1} alt="" />
      </div>
      <div className="text-2xl font-semibold text-black capitalize">pancake</div>
      <div  className="w-full flex justify-between items-center">
        <div>499/-</div>
        <div>
          <LuVegan /> <span>veg</span>
        </div>
      </div>
    </div>
  );
}

export default card;
