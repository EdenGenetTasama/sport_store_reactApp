import ShoesContextProvider from "../../../ContextFlie/shoesContext";
import Counter from "../../../CounterComponent/Counter";
import ShoesCards from "../../ShoesCardsComponet/ShoesCards";

const Shoes = () => {
  return (
    <div className="DivOfAllHTML">
      <ShoesContextProvider>
        <h1>Shoes</h1>
        <Counter/>
        <ShoesCards />
      </ShoesContextProvider>
    </div>
  );
};

export default Shoes;
