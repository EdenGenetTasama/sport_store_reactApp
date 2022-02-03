import "./App.css";
import PantsProviderComp from "./ContextFlie/pantsContext";
import React from "react";
import Shoes from "./components/ShoesComponent/shoesComponent/shoe";
import Pants from "./components/PantsConponent/pants";
import ShirtsProvider from "./ContextFlie/shirtContext";
import Shirts from "./components/ShirtsComponent/shirt";

function App() {
  return (
    <div className="App">
      
        <Shoes />

      {/* <PantsProviderComp> */}
        <Pants />
      {/* </PantsProviderComp> */}

      <ShirtsProvider>
        <Shirts/>
      </ShirtsProvider>
    </div>
  );
}

export default App;
