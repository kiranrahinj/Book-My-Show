import React,{useContext} from 'react'


//context
import { MovieContext } from '../../context/movieContext';

const MovieInfo = () => {
    const {movie}=useContext(MovieContext)

    const genres=movie.genres?.map(({name})=>name).join(",")
    return (
        <>
            <div className="flex flex-col gap-4 ">
                <div className="flex items-center gap-3">
                <div className="h-8 w-40 flex md:px-4" >
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premierimg" className="w-full h-full" />
                </div>
                <span className="text-white text-xs bg-bms-800 rounded-md p-0.5">Streaming Now</span>
                </div>
                <h1 className="hidden lg:flex lg:text-4xl text-white ml-4 font-bold mb-4">{movie.original_title}</h1>
                <div className="text-white flex flex-col-reverse lg:flex-col lg:gap-5 gap-3  ">
                    <h1 className="md:px-4">4k  &bull;{movie.original_language}</h1>
                    <h1 className="md:px-4">{(movie.runtime/60).toFixed(2)}h &bull;{genres} &bull;16+ </h1>  
                  <div className="flex gap-2  lg:gap-2 md:w-screen lg:w-full  md:px-4">
                    <button className=" text-white bg-red-600 w-full p-3 rounded-lg">Rent ₹149 </button>
                    <button className=" text-white bg-red-600 w-full p-3 rounded-lg">Buy ₹149 </button>
                  </div>                
                </div>
              
            </div>
        </>
    )
}

export default MovieInfo;
