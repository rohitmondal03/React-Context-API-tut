import React from 'react'

const Movie = ({ name, price, id }) => {
    return (
        <div
            className='flex flex-col items-center justify-center my-7'
            key={id}
        >
            <h1 className='font-bold text-2xl'>{name}</h1>
            <p>{price}</p>
        </div>
    )
}

export default Movie