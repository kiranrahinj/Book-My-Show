
import React from "react";

import Navbar from "../component/Navbar/Navbar.component";

import HeroCarousal from "../component/HeroCarousel/HeroCarousal.component";


const DefaultLayout=(props)=>{
return(
    <>
     <Navbar/>
    <HeroCarousal/>
   
        {props.children}
    
    </>
)
}
export default DefaultLayout;
