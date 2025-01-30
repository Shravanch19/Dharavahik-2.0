"use client";
import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const SearchRes = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const movies = [
        { title: "Inception", year: 2010, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Interstellar", year: 2014, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
        { title: "The Dark Knight", year: 2008, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Avatar", year: 2009, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
        { title: "The Matrix", year: 1999, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Titanic", year: 1997, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Gladiator", year: 2000, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
        { title: "The Lord of the Rings", year: 2001, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Jurassic Park", year: 1993, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
        { title: "The Shawshank Redemption", year: 1994, poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg" },
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
            <Header onToggleDarkMode={handleToggleDarkMode} />
            

            <div className="container mx-auto p-8 mt-[10vh]">
                <h1 className="text-3xl font-bold mb-6 ml-6">Search Results</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie, index) => (
                        <div key={index} className={`p-4 rounded-lg shadow-md transition-all duration-300 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
                            <img src={movie.poster} alt={movie.title} className="w-full h-60 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-semibold">{movie.title}</h2>
                            <p className="text-gray-400">{movie.year}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchRes;
