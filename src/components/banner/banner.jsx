import React from 'react'
import Banner1 from '../../assest/banner.jpg'

function Banner() {
    return (
        <>
            <div>
                <div>
                    <div className='bg-cover pt-10 bg-center flex justify-center items-center'>
                        <img src={Banner1} className='w-[1360px] brightness-50 h-[509px] rounded-xl' alt="" />
                        <div className='absolute bottom-[270px] font-bold text-white text-center'>
                            <p className='text-[60px]'>Discover your destination with us</p>
                            <p className='text-[18px]'>Explore various tourists attraction for your vacation! </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner