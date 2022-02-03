import { useContext } from "react";
import { ContextShirts } from "../../ContextFlie/shirtContext";
import ShirtCard from "../ShirtCardComponent/shirtCard";

const ShirtsCards = () => {
  const shirtsApiValues = useContext(ContextShirts);
//   console.log(shirtsApiValues);
  return (
    <div className="DivOfCard">
      {shirtsApiValues.shirtsApiInfo.map((shirtItem) => (
        <div className="oneCardStyle">
          <ShirtCard shirtFromContext={shirtItem} />;
        </div>
      ))}
    </div>
  );
};

export default ShirtsCards;
