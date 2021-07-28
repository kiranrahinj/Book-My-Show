import React from 'react'
import { Link } from 'react-router-dom';

export const Poster = (props) => {
    return (
        <Link to={`/movie/${props.id}`}>
         <div className="flex flex-col items-start px-3">
            <div className="h-40 md:h-80">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} className="w-full h-full rounded"/>
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white": "text-grey-700"}`}>{props.original_title}</h3>
            <p className={`text-sm ${props.isDark ? "text-white": "text-grey-700"}`}>{props.original_title}</p>
         </div> 
        </Link>
    )
}
export default Poster;