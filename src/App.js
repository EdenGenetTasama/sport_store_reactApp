import "./App.css";
import React from "react";
import Shoes from "./components/ShoesComponent/shoesComponent/shoe";
import Pants from "./components/PantsConponent/pants";
import Shirts from "./components/ShirtsComponent/shirt";
import Routing from "./RoutingPage";

function App() {
  return (
    <div className="App">
      
      <Routing/>
        {/* <Shoes />

        <Pants />


        <Shirts/> */}

    </div>
  );
}

export default App;
