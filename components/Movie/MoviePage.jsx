"use client";
import React, { useState } from "react";
import Header from "../Header/Header";

const MoviePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const movie = {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi, Thriller",
        rating: "8.8/10",
        poster: "https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
        stream: "https://example.com/stream"
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
                <Header onToggleDarkMode={handleToggleDarkMode} />
            
            <div className="container mx-auto p-6 mt-[10vh]">
                {/* Movie Description Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                    <img src={movie.poster} alt={movie.title} className="w-60 h-auto rounded-lg shadow-md" />
                    <div>
                        <h1 className="text-4xl font-bold">{movie.title}</h1>
                        <p className="text-lg text-gray-400">{movie.year} • {movie.genre}</p>
                        <p className="text-lg font-semibold">Rating: {movie.rating}</p>
                    </div>
                </div>

                {/* YouTube Trailer Section */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Watch Trailer</h2>
                    <div className="w-full h-64 md:h-96">
                        <iframe 
                            className="w-full h-full rounded-lg shadow-md"
                            src={movie.trailer} 
                            title="Movie Trailer" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Streaming Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Watch Movie</h2>
                    <div className="w-full h-64 md:h-96 bg-black flex items-center justify-center rounded-lg shadow-md">
                        <p className="text-white">Streaming window for {movie.title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
