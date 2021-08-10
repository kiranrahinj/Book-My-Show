import React,{useContext} from "react";
import { MovieContext } from "../../context/movieContext";

import MovieInfo from "../MovieHero/movie.info.component"

const MovieHero = () => {
  const {movie}= useContext(MovieContext)
  return (
    <>
      {/*mobile */}
      <div
        className="relative md:hidden w-full"
        style={{ height: "calc(180vw)" }}
      > 
    
        <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />

        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="poster"
          className="w-full h-full"
        />
           <div className="absolute z-30 bottom-5 left-7">
         <MovieInfo/>
       </div>
      </div>
      {/*tab */}
      <div
        className="relative hidden md:block lg:hidden "
        style={{ height: "calc(100vw)" }}
      >
        <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
        <div className="absolute z-30 bottom-5 ">
         <MovieInfo/>
       </div>

        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="poster"
          className="w-full h-full"
        />
      </div>
      {/*pc */}
      <div className=" relative hidden lg:block" style={{ height: "30rem" }}>
        <div
          className="absolute z-10 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        />
       <div className="absolute left-28 top-10 z-30 flex items-center gap-10">
         <div className="w-64 h-96  ">
          <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="main img" className="w-full h-full rounded-xl"
          />
          </div>
          <div >
           <MovieInfo/>
         </div>

        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="bgImage"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default MovieHero;
