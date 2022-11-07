import { createContext } from "react"
import { useState } from "react";
  

export const CoinContext = createContext()


const  CoinProvider = ({children}) => {
    const [coins,setCoins]=useState()

    return ( 
        //har value be contextprovider pass bedi hamono neshon mide
      <CoinContext.Provider value={{coins,setCoins}}>
        {children}
      </CoinContext.Provider>
     );
}
 
export default  CoinProvider ;