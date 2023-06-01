import React, { useState, useContext, createContext } from 'react'


export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([
        {
            id: 18256,
            price: '$10',
            name: 'Harry Potter'
        },
        {
            id: 25677,
            price: '$20',
            name: 'Game of thrones'
        },
        {
            id: 22543,
            price: '$30',
            name: 'Inception'
        }
    ])

    return (
        <MovieContext.Provider
            value={[movies, setMovies]}
        >
            {children}
        </MovieContext.Provider>
    )
}
