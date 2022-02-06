import React, { useContext } from "react";
import ShirtsProvider from "../../ContextFlie/shirtContext";
import ShirtsCards from "../ShirtsCardsComponent/ShirtsCards";


const Shirts = () => {
  return (
    <div className="DivOfAllHTML">
      <ShirtsProvider>
        <h1>Shirts</h1>
        <ShirtsCards />
      </ShirtsProvider>
    </div>
  );
};

export default Shirts;

