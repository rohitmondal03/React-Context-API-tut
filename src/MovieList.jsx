import React, { useContext, useState } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <>
            {
                movies.map(movieData => (
                    <Movie
                        name={movieData.name}
                        price={movieData.price}
                        id={movieData.id}
                    />
                ))
            }

            {/* {movies} */}

        </>
    )
}

export default MovieList