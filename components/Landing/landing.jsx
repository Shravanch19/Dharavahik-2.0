"use client";
import React, { useState } from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";

const Landing = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleDarkMode = () => {
        console.log("Dark mode main");
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div
            className={`${
                isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
            } transition-colors duration-300 min-h-screen flex flex-col`}
        >
            <Header onToggleDarkMode={handleToggleDarkMode} />

            <div className="flex w-full h-full">
                {/* Sidebar */}
                <div
                    className={`fixed left-0 top-[10vh] hidden md:flex flex-col items-center gap-6 w-[10%] h-[90vh] p-6 shadow-lg rounded-tr-2xl rounded-br-2xl transition-all duration-300 overflow-hidden
                        ${
                            isDarkMode
                                ? "bg-gray-900 text-white"
                                : "bg-gray-200 text-gray-900"
                        }`}
                >
                    <button
                        className={`w-full p-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md
                            ${
                                isDarkMode
                                    ? "hover:bg-gray-700 focus:ring-gray-500"
                                    : "hover:bg-gray-300 focus:ring-gray-800"
                            } focus:outline-none focus:ring-2`}
                    >
                        Movies
                    </button>
                    <button
                        className={`w-full p-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md
                            ${
                                isDarkMode
                                    ? "hover:bg-gray-700 focus:ring-gray-500"
                                    : "hover:bg-gray-300 focus:ring-gray-800"
                            } focus:outline-none focus:ring-2`}
                    >
                        Series
                    </button>
                    <button
                        className={`w-full p-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md
                            ${
                                isDarkMode
                                    ? "hover:bg-gray-700 focus:ring-gray-500"
                                    : "hover:bg-gray-300 focus:ring-gray-800"
                            } focus:outline-none focus:ring-2`}
                    >
                        Favourites
                    </button>
                </div>

                {/* Main Content */}
                <div
                    className={`mt-[10vh] ml-0 md:ml-[10%] w-full h-[90vh] overflow-y-scroll flex flex-col items-center p-4 space-y-6
                        ${
                            isDarkMode
                                ? "bg-gray-950 text-white"
                                : "bg-gray-50 text-gray-900"
                        }`}
                >
                    <div className="hero-section text-center flex flex-col items-center space-y-6">
                        <img
                            src="https://www.komar.de/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg"
                            alt="hero img"
                            className="sm:mt-8 w-[90%] md:w-[50%] object-cover rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                        />
                        <h1 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">
                            Welcome to Dharavahik
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl">
                            Discover the best movies and series curated just for you. Enjoy your
                            favorites and explore new content every day.
                        </p>
                    </div>

                    {/* Sliding Section */}
                    <section className="w-full space-y-10">
                        <Slider title="Popular Movies" />
                        <Slider title="Popular Series" />
                        <Slider title="Favourites" />
                    </section>
                    < Footer />
                </div>
            </div>
            
        </div>
    );
};

export default Landing;
