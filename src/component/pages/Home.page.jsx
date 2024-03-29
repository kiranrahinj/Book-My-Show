import React, { useState, useEffect } from "react";

import EntertainmentCardSlider from "../entertainment card/entertainmentCard.component";

//
import PosterSlider from "../posterSlider/posterSlider.component";
import PremierImages from "../config/images.config";
import axios from "axios";

const HomePage = () => {


  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const reqPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
        reqPopularMovies();
  }, []);


  const [upcomingMovies, setupcomingMovies] = useState([]);

  useEffect(() => {
    const reqUpcomingMovies = async () => {
      const getupcomingMovies = await axios.get("/movie/upcoming");
      setupcomingMovies(getupcomingMovies.data.results);
    };
    reqUpcomingMovies();
  }, []);

  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const reqTopRated=async()=> {
      const getTopRated = await axios.get("/movie/top_rated");
      setTopRated(getTopRated.data.results);
    };
    reqTopRated();
  }, []);


  return (
    <>
      <div className="container mx-auto px-4 py-2 mb-10 ">
        <h1 className="text-2xl font-bold text-grey-800 mt-2 ">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="bg-bms-800 mt-4 py-8 mb-14">
        <div className="container mx-auto px-4">
          <div>
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="premier logo"
            />
          </div>

          <PosterSlider
            isDark
            images={popularMovies}
            title={"Premier"}
            subtitle={"Brands New releases Everday"}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 ">
        <div>
          <PosterSlider
            images={upcomingMovies}
            title={"Online Streaming Event"}
          />
        </div>
        <div className="mt-20">
          <PosterSlider images={topRated} title={"Outdoor Events"} />
        </div>
      </div>
    </>
  );
};
export default HomePage;
