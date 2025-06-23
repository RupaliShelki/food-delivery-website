import React from "react";
import Nav from "../components/nav";
import catagoriees from "../categories";
function home() {
  return (
    <>
      <div className="w-full min-h-screen bg-amber-100">
        <Nav />
        <div className="flex flex-wrap justify-center items-center gap-6 w-[100%]">
          {catagoriees.map((item) => (
            <div key={item.id} className="capitalize w-[138px] h-[138px] flex bg-slate-100 justify-center items-center flex-col p-[2%] shadow-md rounded-md text-[20px] font-semibold text-gray-600 hover:bg-amber-200 cursor-pointer transition-all duration-200">
               <div>{item.image}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default home;
