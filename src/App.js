import React from "react";
//AXIOS
import axios from "axios";


import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

import HomePage from "./component/pages/Home.page";
import Movie from "./component/pages/movie.page";



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Play from "./component/pages/plays.page";


axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;






function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage}/>
    <MovieHOC path="/movie/:id" exact component={Movie}/>
    <DefaultHOC path="/plays" exact component={Play}/>
    </>
  )
}
;
export default App;
