import ShoesContextProvider from "../../../ContextFlie/shoesContext";
import ShoesCards from "../../ShoesCardsComponet/ShoesCards";


const Shoes = () => {

  return (
    <div>
      <ShoesContextProvider>
      <h1>Shoes</h1>
        <ShoesCards/>
      </ShoesContextProvider>
    </div>

  );
};

export default Shoes;
