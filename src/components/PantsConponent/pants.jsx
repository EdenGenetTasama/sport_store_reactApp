import PantsProviderComp from "../../ContextFlie/pantsContext";
import PantsCards from "../PantsCarsComponent/pantsCards";


const Pants = () => {
  // const PantsValue = useContext(contextPants);
//   console.log(PantsValue);
  return (
    <div>
      {/* {PantsValue.pantsApi.map((item) => (
        <div className="cardContainer">
        <h2>{item.clothingType}</h2>
        <p>
        {item.clothingCompany} , {item.clothingModel} , {item.clothingPrice}
        </p>
        <img src={item.linkToClothing} className="imageOfCard" />
        </div>
      ))} */}
        <PantsProviderComp>
          <h1>Pants</h1>
          <PantsCards/>
        </PantsProviderComp>
    </div>
  );
};

export default Pants;
