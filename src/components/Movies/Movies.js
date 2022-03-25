import React from 'react';
import Movie from '../Movie/Movie';
import './Movies.css'

const Movies = ({movies}) => {
    return (
        <div className='movies-container'>
            
            {
                movies.map(movie=><Movie key={movie.id} movie={movie}></Movie>)
            }
            
        </div>
    );
};

export default Movies;