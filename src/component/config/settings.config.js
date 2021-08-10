const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  initialSlide: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
       
      },
    },
  ],
};

export default settings;