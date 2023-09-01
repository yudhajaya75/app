import React, { useState } from 'react';
import destinations from './destinationData';
import { BiHeart } from "react-icons/bi";

function Tour() {
    const [rating, setRating] = useState(0);

    const handleRatingClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`cursor-pointer ${i <= rating ? 'text-[#4340CB]' : 'text-gray-300'
                        }`}
                    onClick={() => handleRatingClick(i)}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <>
            <div>
                <p className='text-[20px] font-bold ml-20 mt-20'>Where is your next destination?</p>
                <div className='mx-20 mt-5 flex gap-10'>
                    {destinations.map((destination, index) => (
                        <div key={index} className="w-[200px] sm:w-[400px] md:w-[400px] text-[#002157] shadow-md rounded-lg">
                            <a href="#">
                                <div className="relative">
                                    <img src={destination.image} alt="/" className='w-[400px] h-[205px]' />
                                </div>
                            </a>
                            <div className='relative float-right bottom-[200px] right-3 bg-[#a2a2a2] rounded-full px-1'>
                                <button>
                                    <BiHeart className='relative top-1' color='#fff' size={30} />
                                </button>
                            </div>
                            <div className='p-2 mb-3 w-full flex gap-1 text-[#B5BAC3] text-[14px]'>
                                <p className='font-semibold mb-0'>{destination.category}</p>
                                <p className='font-semibold mb-2'>&#8226;</p>
                                <p className='font-semibold mb-2'>{destination.location}</p>
                            </div>
                            <div className='p-2 -mt-8 w-full flex gap-1 text-[20px] font-bold'>
                                <p>{destination.title}</p>
                            </div>
                            <div className='p-2 -mt-4 flex gap-2'>
                                {renderStars()}
                                <p className='text-[#B5BAC3]'>({destination.reviewCount} Review)</p>
                            </div>
                            <div className='p-2 -mt-2'>
                                <p>{destination.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Tour;
