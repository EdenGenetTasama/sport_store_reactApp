import React, { useEffect, useState } from "react";
import {shirtsCallApi} from "../service/shirts-service";


export  const  ContextShirts= React.createContext() ;

const ShirtsProvider=({children})=>{
const [shirtsApiInfo , setShirtsApiInfo ] = useState([]);

useEffect(()=>{
    shirtsCallApi().then(data=>setShirtsApiInfo(data.listOfShirts) ).catch(error=> console.log(error))
    
},[])

return(
    <ContextShirts.Provider value={{shirtsApiInfo , setShirtsApiInfo}}>
    {children}
    </ContextShirts.Provider>
)

}

export default ShirtsProvider