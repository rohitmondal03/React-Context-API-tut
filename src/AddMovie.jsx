import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext';



const AddMovie = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName= (e) => {
        setName(e.target.value);
    }

    const updatePrice= (e) => {
        setPrice(e.target.value);
    }

    const addMovie= (e) => {
        e.preventDefault();    

        setMovies((prevState) => [...prevState, {name: name, price: price}])
    }


    return (
        <form onSubmit={addMovie}>
            <input 
                name= "name"
                type='text'
                value={name}
                onChange={updateName}
                placeholder='Enter movies..'
                className='border-4'
            />

            <input 
                name= "price"
                type='text'
                value={price}
                onChange={updatePrice}
                placeholder='Enter price..'
                className='border-4'
            />

            <button className='border-2 border-black'>Submit</button>
        </form>
    )
}

export default AddMovie