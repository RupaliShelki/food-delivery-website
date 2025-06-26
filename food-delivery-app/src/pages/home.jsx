import React, { useContext, useState } from "react";
import Nav from "../components/nav";
import catagoriees from "../categories";
import Card from "../components/card";
import { food_items } from "../food";
import { dataContext } from "../contex/userContex";
import { RxCross2 } from "react-icons/rx";

function home() {
  let { cat, setCat, input } = useContext(dataContext);

  function filterCat(category) {
    console.log(`here is category u click ${category}`);
    if (category === "All") {
      setCat(food_items);
    } else {
      // console.log(`here is food.js ${food_items.food_category}`)
      let newList = food_items.filter(
        (item) =>
          item.food_category.toLowerCase().replace(/[_\s]/g, "") ===
          category.toLowerCase().replace(/[_\s]/g, "")
      );
      console.log(`here is output after filter ${newList}`);
      setCat(newList);
    }
  }

  return (
    <>
      <div className="w-full min-h-screen bg-amber-100">
        <Nav />
        {!input ? (
          <div className="flex flex-wrap justify-center items-center gap-6 w-[100%]">
            {catagoriees.map((item) => (
              <div
                key={item.id}
                className="capitalize w-[138px] h-[138px] flex bg-slate-100 justify-center items-center flex-col p-[2%] shadow-md rounded-md text-[20px] font-semibold text-gray-600 hover:bg-amber-200 cursor-pointer transition-all duration-200"
                onClick={() => filterCat(item.name)}
              >
                <div>{item.image}</div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="w-full flex flex-wrap gap-5 px-8 justify-center items-center pt-8 pb-8">
          {cat.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
              id={item.id}
            />
          ))}
        </div>
        <div className="w-[40vw] h-[100vh] fixed top-0 right-0 bg-white shadow-xl">
          <header className=" w-[100%] flex justify-between p-6 font-bold items-center">
            <span>Order Item</span>
              <RxCross2 className=" cursor-pointer w-[30px] h-[30px] hover:text-gray-600 " />
          </header>
        </div>
      </div>
    </>
  );
}

export default home;
