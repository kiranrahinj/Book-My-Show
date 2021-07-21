import React from 'react'

export const Poster = (props) => {
    return (
        <>
         <div className="flex flex-col items-start px-3">
            <div className="h-80">
                <img src={props.src} alt={props.title} className="w-full h-full rounded"/>
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white": "text-grey-700"}`}>{props.title}</h3>
            <p className={`text-sm ${props.isDark ? "text-white": "text-grey-700"}`}>{props.subtitle}</p>
         </div> 
        </>
    )
}
export default Poster;