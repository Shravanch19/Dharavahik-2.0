"use client";
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = ({ title }) => {
    const items = [
        { name: 'MS Dhoni', image: 'https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg' },
        { name: 'MS Dhoni', image: 'https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg' },
        { name: 'MS Dhoni', image: 'https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg' },
        { name: 'MS Dhoni', image: 'https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg' },
        { name: 'MS Dhoni', image: 'https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg' },
        { name: 'MS Dhoni', image: 'https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg' },
        { name: 'MS Dhoni', image: 'https://m.media-amazon.com/images/I/61RQ-3o2n2L._AC_UF1000,1000_QL80_.jpg' },
    ];

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='relative ml-28 w-[85%] px-4 py-6'>
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}

            <div className='relative'>
                <div
                    ref={sliderRef}
                    className='h-[50vh] w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide'
                >
                    <div className='flex space-x-12'>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className='flex-shrink-0 w-56 h-40 bg-gray-200 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg'
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-full h-[45vh] object-cover rounded-t-lg'
                                />
                                <div className='p-2'>
                                    <h3 className='text-lg font-medium text-center'>{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={scrollLeft}
                    className='text-black absolute top-1/2 -translate-y-1/2 left-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-200'
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={scrollRight}
                    className='text-black absolute top-1/2 -translate-y-1/2 right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-200'
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Slider;
