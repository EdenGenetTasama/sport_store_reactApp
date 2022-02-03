import React, { useContext } from "react";
import { contextPants } from "../../ContextFlie/pantsContext";

const Pants = () => {
  const PantsValue = useContext(contextPants);
//   console.log(PantsValue);
  return (
    <div>
      <h1>Pants</h1>
      {PantsValue.pantsApi.map((item) => (
        <div className="cardContainer">
          <h2>{item.clothingType}</h2>
          <p>
            {item.clothingCompany} , {item.clothingModel} , {item.clothingPrice}
          </p>
          <img src={item.linkToClothing} className="imageOfCard" />
        </div>
      ))}
    </div>
  );
};

export default Pants;
