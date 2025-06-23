import React from "react";
import Nav from "../components/nav";
import catagoriees from "../categories";
import Card from "../components/card";
import { food_items } from "../food";
function home() {
  return (
    <>
      <div className="w-full min-h-screen bg-amber-100">
        <Nav />
        <div className="flex flex-wrap justify-center items-center gap-6 w-[100%]">
          {catagoriees.map((item) => (
            <div
              key={item.id}
              className="capitalize w-[138px] h-[138px] flex bg-slate-100 justify-center items-center flex-col p-[2%] shadow-md rounded-md text-[20px] font-semibold text-gray-600 hover:bg-amber-200 cursor-pointer transition-all duration-200"
            >
              <div>{item.image}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
        <div className="w-full flex-wrap gap-5 px-5 justify-center items-center pt-8">
          {food_items.map((item) => (
            <Card  key={item.id} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} id={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default home;
