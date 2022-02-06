import { ShoesContext } from "../../ContextFlie/shoesContext";
import { useContext } from "react";
import ShoeCard from "../ShoeCardComponent/ShoeCard";
import "../ShoesCardsComponet/ShoesCard.css";
import Loading from "../LoadingComponent/Loading";

const ShoesCards = () => {
  const { shoesFromApi, isLoading } = useContext(ShoesContext);

  return (
    <div className="DivOfCard">
      {isLoading ? 
        <Loading />
      : (
        shoesFromApi.map((itemShoe) => (
          <div className="oneCardStyle">
            <ShoeCard shoeInfo={itemShoe} />
          </div>
        ))
      )}
    </div>
  );
};

export default ShoesCards;
