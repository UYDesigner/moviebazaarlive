import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Header() {

    const [toggle, setToggle] = useState(false);
    return (
        <div className='header max-w-[100%] p-[15px]'>
            <div className="headerContainer py-[10px] max-w-[1640px] mx-auto '>">
                <div className="headerLeft flex  flex- items-center justify-between">

                    <div>
                        <Link to="/">
                            <img className="pointer md:w-[100px] w-[80px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" />
                        </Link>
                    </div>

                    {
                        toggle ?
                            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                            :
                            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />

                    }



                    <div className="main-links md:flex hidden items-center">
                        <Link to="/movies/popular?type=popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>

                        <Link to="/movies/top_rated?type=top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                        <Link to="/movies/upcoming?type=upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
                    </div>



                    {/* responsive menubar */}



                    <div className={`'respo' duration-300 main-links bg-[white] md:hidden items-start flex flex-col fixed left-0 top-[75px] w-full h-screen pt-[50px]
                     ${toggle ? 'left-[0]' : 'left-[-100%]'} opo`}>

                        <Link to="/movies/popular?type=popular" style={{ textDecoration: "none", color: 'black' }} className=' p-3 pl-0 pt-[50px]' >
                            <span className='res'>Popular</span>
                        </Link>
                        <Link to="/movies/top_rated?type=top_rated" style={{ textDecoration: "none" }} className='p-3 pl-0'>
                            <span className='res'>Top Rated</span>
                        </Link>
                        <Link to="/movies/upcoming?type=upcoming" style={{ textDecoration: "none" }} className='p-3 pl-0'>
                            <span className='res'>Upcoming</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
