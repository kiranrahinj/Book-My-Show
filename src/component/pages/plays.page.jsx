import React from "react";


import Poster from "../poster/poster.component";
import PlaysFilter from "../playsFilter/PlaysFilter";

const Play = () => {
  return (
    <>
      <div className="container mx-auto p-4 ">
        <div className="w-full lg:flex lg:flex-row-reverse justify-between align-center ">
          <div className="lg:w-3/4">
            
            <h1 className="font-bold text-2xl">Plays In Pune</h1>
            <div className="flex flex-wrap ">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-2">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-rzdltgpbpx-portrait.jpg"
                  title="Admission"
                  subtitle="English"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-2">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-rzdltgpbpx-portrait.jpg"
                  title="Admission"
                  subtitle="English"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-2">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-rzdltgpbpx-portrait.jpg"
                  title="Admission"
                  subtitle="English"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-2">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-rzdltgpbpx-portrait.jpg"
                  title="Admission"
                  subtitle="English"
                />
              </div>
            </div>
          </div>
       
        <div >
            <h1 className="font-bold text-2xl">Filters</h1>
               <PlaysFilter title="date" tags={["today","tomarrow","today"]}/>
               
               <PlaysFilter title="language" tags={["marathi ","english","hindi"]}/>
               
               <PlaysFilter title="categories" tags={["theatre"]}/>
               <PlaysFilter title="genres" tags={["Drama ","comedy","historical"]}/>
        </div>
      </div> </div>
    </>
  );
};

export default Play;
