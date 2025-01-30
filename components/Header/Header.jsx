"use client";
import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { FiSun, FiMoon } from "react-icons/fi";

const Header = ({ onToggleDarkMode }) => {
    const [IsDark, setDark] = useState(false)
    return (
        <div>
            <div className='fixed top-0 w-full h-[10vh] bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex items-center justify-between px-6 sm:px-10'>
                {/* Logo */}
                <a href="/" className='w-[6%]'>
                    <img src="/logo.png" alt="logo img" className='sm:w-[90%] w-[100%]' />
                </a>

                {/* Right section */}
                <div className='utils flex items-center gap-6 sm:gap-10'>
                    {/* Search box */}
                    <div className='searchbox flex items-center bg-white rounded-lg overflow-hidden'>
                        <input
                            type="text"
                            placeholder="Search..."
                            className='px-4 py-2 bg-transparent text-black outline-none placeholder-gray-500 w-36 sm:w-48'
                        />
                        <button className='text-black p-2 transition-all duration-300'>
                            <IoSearchOutline size={20} />
                        </button>
                    </div>

                    {/* Auth & Theme toggle */}
                    <div className='auth flex items-center gap-4 sm:gap-5'>
                        <a className='text-white font-semibold hover:text-yellow-500 transition-all duration-300' href='/Login'>
                            Sign In
                        </a>
                        <button
                            className='text-white p-2 rounded-full transition-all duration-300'
                            onClick={onToggleDarkMode}
                        >
                            {IsDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
