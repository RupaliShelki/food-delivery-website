import React from "react";
import image1 from "../assets/image1.avif";
import { LuVegan } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";



function card({ name, image, id, price, type }) {

  let dispatch = useDispatch();
  return (
    <div className="w-[280px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 hover:border-2 border-r-amber-700">
      <div className="w-[100%] h-[60%] overflow-hidden object-cover">
        <img src={image} alt="" />
      </div>
      <div className="text-2xl font-semibold text-black capitalize">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold">Rs {price}/-</div>
        <div className="flex justify-center items-center capitalize gap-2">
          {type === "veg" ? (
            <LuVegan className="text-green-600" />
          ) : (
            <GiChickenOven className="text-green-600" />
          )}
          <span  className="text-lg font-bold ">
            {type}
          </span>
        </div>
      </div>
      <button
        className="w-full p-3 bg-red-400  text-white rounded-lg hover:bg-amber-600 transition-all shadow-lg cursor-pointer "
        onClick={() => dispatch(AddItem(id))}
      >
        Add to Dish
      </button>
    </div>
  );
}

export default card;
