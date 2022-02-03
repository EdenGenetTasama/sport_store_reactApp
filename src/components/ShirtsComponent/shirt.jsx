import React, { useContext } from "react";
import ShirtsProvider from "../../ContextFlie/shirtContext";
import ShirtsCards from "../ShirtsCardsComponent/ShirtsCards";


const Shirts = () => {
  // const shirtsApiValues = useContext(ContextShirts);
  // //   console.log(shirtsApiValues.shirtsApiInfo);
  return (
    <div>
      <ShirtsProvider>
        <h1>Shirts</h1>
        <ShirtsCards />
      </ShirtsProvider>
    </div>
  );
};

export default Shirts;

{
  /* <h1>Shirts</h1>
{shirtsApiValues.shirtsApiInfo.map((shirt) => (
  <div className="cardContainer">
    <h2>{shirt.clothingType}</h2>
    <p>
      {shirt.clothingCompany} , {shirt.clothingModel} , {shirt.clothingPrice}
    </p>
    <img src={shirt.linkToClothing} className="imageOfCard" />
  </div>
))} */
}
