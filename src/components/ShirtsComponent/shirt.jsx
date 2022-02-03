import React, { useContext } from "react";
import { ContextShirts } from "../../ContextFlie/shirtContext";

const Shirts = () => {
  const shirtsApiValues = useContext(ContextShirts);
  //   console.log(shirtsApiValues.shirtsApiInfo);
  return (
    <div>
      <h1>Shirts</h1>
      {shirtsApiValues.shirtsApiInfo.map((shirt) => (
        <div className="cardContainer">
          <h2>{shirt.clothingType}</h2>
          <p>
            {shirt.clothingCompany} , {shirt.clothingModel} , {shirt.clothingPrice}
          </p>
          <img src={shirt.linkToClothing} className="imageOfCard" />
        </div>
      ))}
    </div>
  );
};

export default Shirts;
