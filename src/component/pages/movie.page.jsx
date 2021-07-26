import React from "react";
import { FaCcVisa } from "react-icons/fa";
import Cast from "../cast/cast.component";
import MovieHero from "../MovieHero/Movie.hero.component";

//
import PosterSlider from "../posterSlider/posterSlider.component";
import images from "../config/images.config";

const Movie = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />

      <div className="container lg:w-2/3 lg:ml-16 p-2 ">
        <h1 className="text-2xl font-bold mb-2">About the movie</h1>
        <p className=" font-normal  ">
          Bruce Wayne and Diana Prince try to bring the metahumans of Earth
          together after the death of Clark Kent. Meanwhile, Darkseid sends
          Steppenwolf to Earth with an army to subjugate humans.
        </p>

        <div className="my-5">
          <hr />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold ">Applicable offers</h1>
          <div className=" lg:flex lg:gap-3 my-1 ">
            <div className=" mb-2 bg-yellow-100 flex items-start gap-3 p-2  border-yellow-300 border-dashed border-2 rounded-md">
              <div className=" ml-2 mt-2 h-8 w-10">
                <img
                  src="https://in.bmscdn.com/offers/tnclogo/rupay-stream-offer-rupay0421.jpg?23042021135408"
                  alt="rupay symbol"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h1 className="font-bold">Rupay Stream Offfer</h1>
                <p className="text-grey-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
            <div className="mb-2 bg-yellow-100 flex items-start gap-3 p-2  border-yellow-300 border-dashed border-2 rounded-md">
              <div className=" ml-2 mt-2 h-8 w-10">
                <img
                  src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                  alt="Logo symbol"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h1 className="font-bold">Filmy Pass Offfer</h1>
                <p className="text-grey-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="my-4">
          <hr />
        </div>
        <h1 className="text-2xl font-bold  my-8">Cast</h1>
        <div className="flex  gap-3 my-8">
          <Cast
            img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
            name="Ben Affleck"
            role="batman"
          />
          <Cast
            img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
            name="Henry Cavill "
            role="superman"
          />
          <Cast
            img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
            name="Gal Gadot"
            role="wonder women"
          />
          <Cast
            img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg"
            name="Ray Fisher"
            role="Cyborg"
          />
        </div>
        <div className="my-8">
          <hr />
        </div>

        <h1 className="text-2xl font-bold  my-8">Crew</h1>
        <div className="flex  gap-3 my-8">
          <Cast
            img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
            name="Ben Affleck"
            role="batman"
          />
          <Cast
            img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
            name="Henry Cavill "
            role="superman"
          />
          <Cast
            img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
            name="Gal Gadot"
            role="wonder women"
          />
          <Cast
            img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg"
            name="Ray Fisher"
            role="Cyborg"
          />
        </div>
        <div className="my-8">
          <hr />
        </div>

        <PosterSlider
          config={settings}
          images={images}
          title={"You might also like"}
        />

        <div className="my-6">
          <hr />
        </div>

        <PosterSlider
          config={settings}
          images={images}
          title={"BMS XCLUSIV"}
        />

      </div>
    </>
  );
};
export default Movie;
