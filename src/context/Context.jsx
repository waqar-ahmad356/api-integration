import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const userContext=createContext(null)

const Context = ({children}) => {
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    useEffect(()=>{
        const token=localStorage.getItem("token");
        setIsAuthenticated(!!token);
    },[])
    const logout=()=>{
        localStorage.removeItem("token")
        setIsAuthenticated(false)
    }
  return (
    <userContext.Provider value={{isAuthenticated,setIsAuthenticated,logout}}>
    {children}
      
    </userContext.Provider>
  )
}

export default Context
