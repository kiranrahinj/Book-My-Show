import React,{useContext,useState} from 'react'
//compo
import PaymentModal from '../paymentModal/PaymentModal';

//context
import { MovieContext } from '../../context/movieContext';


const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
  
    const { movie } = useContext(MovieContext);
  
    // optional chaining.
    const genres = movie.genres?.map(({ name }) => name).join(", ");
  
    const rentMovies = () => {
      setIsOpen(true);
      setPrice(149);
    };
  
    const buyMovies = () => {
      setIsOpen(true);
      setPrice(599);
    };
  
    return (
      <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} setPrice={setPrice} />
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
                    <button onClick={rentMovies} className=" text-white bg-red-600 w-full p-3 rounded-lg">Rent ₹149 </button>
                    <button onClick={buyMovies}  className=" text-white bg-red-600 w-full p-3 rounded-lg">Buy ₹599 </button>
                  </div>                
                </div>
              
            </div>
        </>
    )
}

export default MovieInfo;
