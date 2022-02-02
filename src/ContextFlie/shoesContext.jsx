import React, { useEffect,useState } from "react";
import { GetShoesDetails } from "../service/shoes-service";

export const ShoesContext = React.createContext();

// const arrayOfNames = ["Eden" , "Yafit" , "Daniel" , "Roi"]


const ShoesContextProvider = ({ children }) => {
  const [shoesFromApi, setShoesFromApi] = useState([]);
  useEffect(() => {
    GetShoesDetails().then((data) => setShoesFromApi(data.listOfAllShoes));
  }, []);
  
  return (
    <ShoesContext.Provider value={{ shoesFromApi, setShoesFromApi }}>
      {children}
    </ShoesContext.Provider>
  );
};

export default ShoesContextProvider;
