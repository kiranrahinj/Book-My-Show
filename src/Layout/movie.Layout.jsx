import React from 'react'
import Movienavbar from '../component/Navbar/movie.navbar.component';



const MovieLayout = (props) => {
    return (
        <>
            <Movienavbar/>
            {props.children}
        </>
    )
}

export default MovieLayout;
