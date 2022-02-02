import React, { useState , useEffect } from "react"
import {GetPantsApi} from "../service/pants-service";


export const contextPants = React.createContext();

const PantsProviderComp =({children})=>{
    const [pantsApi , setPantsApi] = useState([]);
    useEffect(()=>{
        GetPantsApi().then((data)=> setPantsApi(data.listOfPants))  
    }, [])
    return(
    <contextPants.Provider value={{pantsApi , setPantsApi}}>
    {children}
    </contextPants.Provider>
    )
}

export default PantsProviderComp;