import React, { useContext } from "react";
import { ShoesContext } from "../../../ContextFlie/shoesContext";


const Shoes = () => {
  const shoesValueFromContext = useContext(ShoesContext);
  // console.log(shoesValueFromContext.shoesFromApi);

  return (

    <div>
      <h1>Shoes</h1>
      {shoesValueFromContext.shoesFromApi.map((item) => (
        <div className="cardContainer">
          <h2>{item.shoeType}</h2>
          <p>
            {item.company} , {item.shoeModel} , {item.shoePrice}
          </p>
          <img src={item.linkImage} className="imageOfCard" />
        </div>
      ))}
    </div>

  );
};

export default Shoes;
