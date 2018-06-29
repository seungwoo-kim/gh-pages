import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, poster,genres,synopsis }) {
    return (
        <div className="Movies">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="movie__genres">
                {genres.map((genres,index)=><MovieGenres genres={genres} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({ poster,alt }) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenres({genres}){
    return (
        <span className="Movie__genres">{genres}</span> 
    )
}

Movie.propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres:PropTypes.array.isRequired,
        synopsis:PropTypes.string.isRequired
    }
MoviePoster.propTypes = {
        poster: PropTypes.string.isRequired,
        alt:PropTypes.string.isRequired
    }

MovieGenres.PropTypes={
     genres:PropTypes.string.isRequired
}

export default Movie;