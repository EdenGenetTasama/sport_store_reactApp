import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Shoes from "./components/ShoesComponent/shoesComponent/shoe";
import Pants from "./components/PantsConponent/pants";
import Navbar from "./components/NavbarComponent/navbar";
import Footer from "./components/FooterComponent/footer";
import Shirts from "./components/ShirtsComponent/shirt";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shoes />}></Route>
        <Route path="/pants" element={<Pants />}></Route>
        <Route path="/shirts" element={<Shirts />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
