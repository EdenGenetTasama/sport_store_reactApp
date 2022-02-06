import PantsProviderComp from "../../ContextFlie/pantsContext";
import PantsCards from "../PantsCarsComponent/pantsCards";


const Pants = () => {
  // const PantsValue = useContext(contextPants);
//   console.log(PantsValue);
  return (
    <div className="DivOfAllHTML">
        <PantsProviderComp>
          <h1>Pants</h1>
          <PantsCards/>
        </PantsProviderComp>
    </div>
  );
};

export default Pants;
