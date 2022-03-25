import React from 'react';
import './Movie.css'
const Movie = (props) => {
    const {name,budget,img}=props.movie;
    return (
        <div className='movie'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Budget: {budget}</p>
            <button onClick={()=>props.handleSelect(name)}>Select Watch</button>
        </div>
    );
};

export default Movie;