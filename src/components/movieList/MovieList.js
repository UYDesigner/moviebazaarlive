import React, { useEffect, useState } from 'react'
import './MovieList.css';
import Card from '../card/Card';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MovieList() {
    
    const [movieList, setMovieList] = useState([])
    const location = useLocation();
    const type = new URLSearchParams(location.search).get("type");

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log("Type changed:", type);
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}