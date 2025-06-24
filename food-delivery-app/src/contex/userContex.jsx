import React, { createContext } from 'react'


export const dataContex=createContext()
function userContex({children}) {
  return (
    <div>
    {children}
    </div>
  )
}

export default userContex