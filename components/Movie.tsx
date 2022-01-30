import React, { FC } from "react";

export interface IMovie {
    adult?: boolean;
    budget?: number;
    genres?: [];
    overview?: string;
    posterPath?: string;
    releaseDate?: Date;
    title: string;
    tmbdId:number;
}

const Movie:FC<IMovie> = ({adult,budget,genres,overview,posterPath,releaseDate,title,tmbdId, children }) => {
    
    return (
        <div >
            <img src={`https://image.tmdb.org/t/p/original/${posterPath}`}  alt={title} />
            <div >
                <h5> {title}</h5>
                {   <>
                        <p>Age range: {adult?'18+':'Ok for under 18'}</p>   
                        <p>Description:{overview}</p>
                        <p>Genres:{genres}</p> 
                        <p>ReleaseDate:{releaseDate}</p>
                        <p>Budget:{budget}</p>               
                    </>
                }

                
                {children}
            </div>
        </div>
    )
};

export default Movie;