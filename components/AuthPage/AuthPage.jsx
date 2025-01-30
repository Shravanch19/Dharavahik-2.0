"use client";
import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div
            className={`flex items-center justify-center min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
                }`}
        >
            <div className="absolute top-4 right-4">
                <button
                    className={`p-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none ${isDarkMode
                        ? "bg-gray-800 text-white hover:bg-gray-700"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                        }`}
                    onClick={handleToggleDarkMode}
                >
                    {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
            </div>

            <div
                className={`w-full max-w-md p-8 rounded-2xl shadow-2xl transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                    }`}
            >
                <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300 ${isDarkMode
                                ? "bg-gray-800 text-white focus:ring-gray-500"
                                : "bg-gray-100 focus:ring-gray-400"
                                }`}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300 ${isDarkMode
                                ? "bg-gray-800 text-white focus:ring-gray-500"
                                : "bg-gray-100 focus:ring-gray-400"
                                }`}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full p-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-md focus:outline-none focus:ring-2 ${isDarkMode
                                ? "bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-400"
                                : "bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-300"
                            }`}
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-4 text-sm text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <button
                    className={`w-full p-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 ${isDarkMode
                            ? "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400"
                        }`}
                >
                    <FcGoogle size={24} />
                    Continue with Google
                </button>


                <p className="mt-6 text-center text-sm">
                    Don't have an account? <a href="/SignUp" className="text-blue-500 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;