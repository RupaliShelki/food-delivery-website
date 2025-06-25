import React, { createContext, useState } from "react";
import { food_items } from "../food";
export const dataContext = createContext();

function userContex({ children }) {
  let [input, Setinput] = useState("");
  let [cat, setCat] = useState(food_items);
  
  let data = {
    input,
    Setinput,
    cat,
    setCat,
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
}

export default userContex;
