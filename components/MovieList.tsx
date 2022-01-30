import React from 'react';
import Movie from './Movie'


const MovieList= ([movies]) => {
    return (
        <ul>
            {
                movies.map((movie) => <Movie key={movie.tmbdId} title={movie.title} tmbdId={movie.TmbdId} 
                releaseDate={movie.releaseDate} budget={movie.budget} posterPath={movie.posterPath} adult={movie.adult} overview={movie.overview}/>)
            }
        </ul>
    );
}

export default MovieList;