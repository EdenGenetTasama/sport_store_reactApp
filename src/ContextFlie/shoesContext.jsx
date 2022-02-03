import React, { useEffect,useState } from "react";
import { GetShoesDetails } from "../service/shoes-service";

export const ShoesContext = React.createContext();



const ShoesContextProvider = ({ children }) => {
  const [shoesFromApi, setShoesFromApi] = useState([]);
  useEffect(() => {
    GetShoesDetails().then((data) => setShoesFromApi(data.listOfAllShoes));
  }, []);
  
  return (
    <ShoesContext.Provider value={{ shoesFromApi }}>
      {children}
    </ShoesContext.Provider>
  );
};

export default ShoesContextProvider;
