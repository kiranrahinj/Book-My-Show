import React from "react";
import EntertainmentCardSlider from "../entertainment card/entertainmentCard.component";
import Premier from "../premier/Premier.component";



const HomePage=()=>{

    return(
       <>
       
       <div className="container mx-auto px-4">
           <h1 className="text-2xl font-bold text-grey-800 mt-2">The Best of Entertainment </h1>
           <EntertainmentCardSlider/>
           <Premier/>
       </div>
       
       </>
       );
}
export default HomePage;