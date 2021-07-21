import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return(
  <>
    <div className="w-full h-64 p-4 ">
      <img
        src={props.src}
        alt="entertainment image"
        className="w-full h-full rounded-xl "
      />
    </div>
  </>
  )
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjQwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
    
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
  ];

  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,

    responsive: [
      {
        breakpoints: 1024,
        settings: {
            slidesToShow:4,
            slidesToScroll:3,
            infinite:true,
        },
      },
      {
       breakpoints:600,
      settings:{
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide:1,
      },
      },
      {
        breakpoints:480,
       settings:{
           slidesToShow:2,
           slidesToScroll:1,
         
       },
       },
    ],
  };

  return( 
  <>
  
  <Slider {...settings} >
      { EntertainmentImage.map((image)=>(
          <EntertainmentCard  src={image} />
      )) }


  </Slider>
  
   </>
  );
};

export default EntertainmentCardSlider;