import React, { createContext } from 'react'
export const dataContex=createContext()

function userContex({children}) {
    let data= {

    }
  return (
    <div>
    <dataContex.Provider value={data}>
    {children}
    </dataContex.Provider>
    </div>
  )
}

export default userContex