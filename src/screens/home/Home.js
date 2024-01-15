import React, { useEffect, useState } from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from '../../components/movieList/MovieList';

export default function Home() {


    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])


    console.log('dataaaaaaaaaaa len', popularMovies.length)

    return (
        <>
            <div className="poster">



                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}


                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                                        alt=""
                                        className='md:w-[100%] w-auto md:h-auto h-[90%] md:mb-[10px] mb-[5px]'
                                    />

                                </div>
                                <div className="posterImage__overlay md: p-[90px] p-[0px]  md:pb-[140px] pb-[80px]  md:pl-[90px] pl-[20px]  md:pr-[90px] pr-[20px]">
                                    <div className="posterImage__title     md:font-black font-semibold md:text-[60px] text-[30px]">{movie ? movie.original_title : ""}</div>
                                    <div className="posterImage__runtime md: text-[20px]" >
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating md: text-[20px] md:ml-[40px] ml-[35px] ">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description md:text-[15px] text-[12px] md:w-[50%] w-[100%]">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}
