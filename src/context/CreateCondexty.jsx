import React, { createContext, useReducer, useState } from 'react'
import { INITALSTATE, productReduxItem } from './productRedux'






export  const cretateUseCondext=createContext()
const CreateCondexty = ({children}) => {
    
  const [cartData,dispatch]=useReducer(productReduxItem,INITALSTATE)
 
  return (
 <cretateUseCondext.Provider value={{cartData,dispatch}}  >
       {children}
 </cretateUseCondext.Provider>
  )
}

export default CreateCondexty