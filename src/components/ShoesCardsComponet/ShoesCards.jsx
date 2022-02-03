import { ShoesContext } from "../../ContextFlie/shoesContext";
import { useContext } from "react";
import ShoeCard from "../ShoeCardComponent/ShoeCard";
import '../ShoesCardsComponet/ShoesCard.css'

const ShoesCards = () => {
  const shoesValueFromApi = useContext(ShoesContext);

  
  return (
    <div className="DivOfCard">
      {shoesValueFromApi.shoesFromApi.map((itemShoe) => (
        <div className="oneCardStyle">
          <ShoeCard shoeInfo={itemShoe} />
        </div>
      ))}
    </div>
  );
};

export default ShoesCards;
