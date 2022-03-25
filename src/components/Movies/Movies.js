import React from 'react';
import Movie from '../Movie/Movie';
import Sidebar from '../Sidebar/Sidebar';
import './Movies.css'

const Movies = ({movies,handleSelect,name}) => {
    return (
        <div className='movies-container'>
            <div className='movies'>
                            
            {
                movies.map(movie=><Movie key={movie.id} movie={movie} handleSelect={handleSelect}></Movie>)
            }
            </div>
            <Sidebar name={name}></Sidebar>
        </div>
    );
};

export default Movies;