import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import arrows

import { NextArrow, PrevArrow, } from"../HeroCarousel/arrows.component"

const HeroCarousal = () => {

    const settingLg={
    arrows:true,
    autoplay:true,
    dots:true,
    centerMode:true,
    centerPadding:"400px",
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
}


  const settings = {
    arrows: true,
    autoplay:true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
}
 

  const images = [
    "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1626128665085-483747621778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=610&q=80",
    "https://images.unsplash.com/photo-1622495894321-010d1e6db2a9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80",
    "https://images.unsplash.com/photo-1626050954744-92bf034ce476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1626074961596-cab914d9392e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80",
  ];

  return (
    <>
      <div>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-60 md:h-72 py-1 px-1">
              <img src={image} alt="testing.jpg" className="w-full h-full" />
            </div>
          ))}
        </HeroSlider>
        </div>
        <div className="hidden lg:block  py-2">
        <HeroSlider {...settingLg}>
          {images.map((image) => (
            <div className="w-full h-64 px-1 ">
              <img src={image} alt="testing.jpg" className="w-full h-full" />
            </div>
          ))}
        </HeroSlider>
        </div>
      </div>
    </>
  );
};
export default HeroCarousal;
