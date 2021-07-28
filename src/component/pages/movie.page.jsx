import React, { useContext, useState, useEffect } from "react";

import Cast from "../cast/cast.component";
import MovieHero from "../MovieHero/Movie.hero.component";

//
import PosterSlider from "../posterSlider/posterSlider.component";


//context
import { MovieContext } from "../../context/movieContext";
import axios from "axios";
import { useParams } from "react-router-dom";

//slider
import Slider from "react-slick";
// Compoenent


const Movie = () => {
  const { movie } = useContext(MovieContext);
  const { id } = useParams();

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const reqCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    reqCast();
  }, [id]);
  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };

    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommended(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  }, [id]);

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

  const Castsettings = {
    infinite: false,
  
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />

      <div className="container lg:w-2/3 lg:ml-16 p-2 ">
        <h1 className="text-2xl font-bold mb-2">About the movie</h1>
        <p className=" font-normal  ">{movie.overview}</p>

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

        <Slider {...Castsettings}>
          {" "}
          {cast.map((castdata) => (
            <Cast
              img={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
              name={castdata.original_name}
              role={castdata.character}
            />
          ))}
        </Slider>

        <div>
          <hr />
        </div>
        <div className="mt-3">
          <PosterSlider
            config={settings}
            images={similarMovies}
            title={"You might also like"}
          />
        </div>
        <div >
          <hr />
        </div>
        <div className="mt-2">
          <PosterSlider
            config={settings}
            images={recommended}
            title={"BMS XCLUSIV"}
          />
        </div>
      </div>
    </>
  );
};
export default Movie;
