import { useContext } from "react";
import { contextPants } from "../../ContextFlie/pantsContext";
import PantCard from "../PantCardComponent/pantCar";

const PantsCards = () => {
  const valuePants = useContext(contextPants);
  // console.log(valuePants.pantsApi);
  return (
    <div className="DivOfCard">
      {valuePants.pantsApi.map((pantsItem) => (
        <div className="oneCardStyle">
          <PantCard itemInPantCards={pantsItem} />
        </div>
      ))}
    </div>
  );
};

export default PantsCards;
