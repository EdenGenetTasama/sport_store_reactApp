import React, { useContext } from "react";
import ShoesContextProvider from "../../../ContextFlie/shoesContext";
import ShoesCards from "../../ShoesCardsComponet/ShoesCards";


const Shoes = () => {

  return (
    <div className="gfgfgfgfgf">
      <h1>Shoes</h1>
      <ShoesContextProvider>
        <ShoesCards/>
      </ShoesContextProvider>
    </div>

  );
};

export default Shoes;
