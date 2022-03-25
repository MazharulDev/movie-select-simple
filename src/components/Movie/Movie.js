import React from 'react';
import './Movie.css'
import { BiMoviePlay } from 'react-icons/bi'
const Movie = (props) => {
    const {name,budget,img}=props.movie;
    return (
        <div className='movie'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Budget: {budget}</p>
            <button onClick={()=>props.handleSelect(props.movie)}>Select Watch <BiMoviePlay size={15}/></button>
        </div>
    );
};

export default Movie;