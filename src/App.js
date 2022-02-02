import logo from "./logo.svg";
import "./App.css";
import ShoesContextProvider from "./ContextFlie/shoesContext";
import PantsProviderComp from "./ContextFlie/pantsContext";
import React, { useState } from "react";
import Shoes from "./components/ShoesComponent/shoesComponent/shoe";
import Pants from "./components/PantsConponent/pants";

function App() {
  return (
    <div className="App">
      <ShoesContextProvider>
        <Shoes />
      </ShoesContextProvider>

      <PantsProviderComp>
        <Pants />
      </PantsProviderComp>
    </div>
  );
}

export default App;
