import {Routes , Route , BrowserRouter, Router} from "react-router-dom";
import React from "react";
import Shoes from "./components/ShoesComponent/shoesComponent/shoe";
import Pants from "./components/PantsConponent/pants";


const Routing=()=>{

    return(
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Shoes/>}></Route>
            <Route path="/pants" element={<Pants/>}></Route>
            {/* <Route path="" element={}></Route> */}
        </Routes>
        </BrowserRouter>
    )
}

export default Routing;
