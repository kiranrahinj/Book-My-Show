import axios from "axios";
import React,{useEffect,useContext} from 'react'
import Movienavbar from '../component/Navbar/movie.navbar.component';

import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/movieContext';


const MovieLayout = (props) => {
    const {id}=useParams();
    const {movie ,setMovie} = useContext(MovieContext);

    useEffect(() => {
       const reqMovies= async()=>{
           const getMovies =await axios.get(`/movie/${id}`);
           setMovie(getMovies.data);
       }
       reqMovies();
    }, []);

    

    return (
        <>
            <Movienavbar/>
            {props.children}
        </>
    )
}

export default MovieLayout;
