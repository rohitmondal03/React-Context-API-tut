import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {

  const [movies, setMovies]= useContext(MovieContext);

  return (
    <div className='flex flex-row items-center justify-between py-5 px-2 bg-slate-400'>
      <h3 className='font-bold'>Dev Movies</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  )
}

export default Nav