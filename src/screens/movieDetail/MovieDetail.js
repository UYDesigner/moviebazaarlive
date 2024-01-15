import React, { useEffect, useState } from 'react';
import './MovieDetail.css';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
    const [currentMovieDetail, setMovie] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, [id]); // Include 'id' as a dependency to fetch data when 'id' changes

    const getData = () => {
        console.log('id of movie', id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data));
    };
    console.log(currentMovieDetail);
    return (
        <div className="movie">
            <div className="movie__intro md:w-[90%] w-[100%]">
                <img className="movie__backdrop md:h-[500px] h-[300px]" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail md:w-[75%] w-[90%] md:bottom-[300px] bottom-[0] pt-[10px] flex flex-row flex-1">
                <div className="movie__detailLeft md:w-auto w-[40%]">
                    <div className="movie__posterBox md:pb-[0] pb-[100px]">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight md:w-auto w-[50%]">
                    <div className="movie__detailRightTop">
                        <div className="movie__name md:text-[50px] text-[25px] font-[600]">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline md:text-[20px] text-[15px]">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating md:text-[20px] text-[15px]">
                            {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>
                        <div className="movie__runtime md:text-[20px] text-[15px]">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate md:text-[20px] text-[15px]">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}
                        </div>
                        <div className="movie__genres md:text-[20px] text-[10px] ">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                    ?
                                    currentMovieDetail.genres.map(genre => (
                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom md:block hidden">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>


                </div>
            </div>
            <div className="movie__links md:bottom-[120px] bottom-[0]  ">
                <div className="movie__heading md:flex flex-col  md:text-[45px] text-[25px]">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button mb-[10px]">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading md:text-[45px] text-[25px]">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    );
}
