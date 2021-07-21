import React from "react";
import Slider from "react-slick";
import Poster from "../poster/poster.component";

export const Premier = () => {
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PremierImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-hpbbnylznm-portrait.jpg",
      alt: "zack",
      title: "zact",
      subtitle: "english",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-hpbbnylznm-portrait.jpg",
      alt: "zack",
      title: "zact",
      subtitle: "english",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-hpbbnylznm-portrait.jpg",
      alt: "zack",
      title: "zact",
      subtitle: "english",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-hpbbnylznm-portrait.jpg",
      alt: "zack",
      title: "zact",
      subtitle: "english",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-hpbbnylznm-portrait.jpg",
      alt: "zack",
      title: "zact",
      subtitle: "english",
    },
  ];

  return (
    <>
      <div>
        <Slider {...settings}>
          {PremierImages.map((image) => (
            <Poster {...image} />
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Premier;
