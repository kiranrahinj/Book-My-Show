import React from 'react'

const Cast = (props) => {
    return (
        <>
            <div className="flex flex-col gap-1 items-center">
                <div className="h-28 w-28">
                    <img src={props.img} alt="castimg" className="w-full h-full rounded-full"/>
                </div>
                <h1 className="font-bold">{props.name}</h1>
                <h3 className="text-grey-500">as {props.role}</h3>
            </div>
        </>
    )
}

export default Cast;
