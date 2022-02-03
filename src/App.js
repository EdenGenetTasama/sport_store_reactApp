import "./App.css";
import React from "react";
import Shoes from "./components/ShoesComponent/shoesComponent/shoe";
import Pants from "./components/PantsConponent/pants";
import ShirtsProvider from "./ContextFlie/shirtContext";
import Shirts from "./components/ShirtsComponent/shirt";

function App() {
  return (
    <div className="App">
      
        <Shoes />

        <Pants />

      {/* <ShirtsProvider> */}
        <Shirts/>
      {/* </ShirtsProvider> */}
    </div>
  );
}

export default App;
