import React, { useEffect,useState } from "react";
import { GetShoesDetails } from "../service/shoes-service";

export const ShoesContext = React.createContext();



const ShoesContextProvider = ({ children }) => {
  const [shoesFromApi, setShoesFromApi] = useState([]);
  const [isLoading , setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetShoesDetails().then((data) => setShoesFromApi(data.listOfAllShoes)).finally(()=>{setIsLoading(false)});
  }, []);
  
  return (
    <ShoesContext.Provider value={{ shoesFromApi , isLoading }}>
      {children}
    </ShoesContext.Provider>
  );
};

export default ShoesContextProvider;
