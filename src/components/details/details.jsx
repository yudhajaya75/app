import React from 'react'
import Upcoming from '../../assest/upcoming.png'

function details() {
    return (
        <>
            <div className='w-[1400px] h-[500px] ml-[80px]'>
                <div className='bg-[#FFF4EF] rounded-r-full w-[600px] h-[500px] relative'>
                    <div className='flex gap-14 border-2 border-slate-300 rounded-xl w-[1400px] h-[500px]'>
                        <div className='relative top-[200px] left-[50px] text-left w-[400px] h-[496px]'>
                            <p className='text-[18px] font-bold'>Price Comparison: Find your best deals</p>
                            <p className='text-[18px] text-[#626262]'>Looking for the best deals on your next trip? Look no further! Our website offers a feature allowing you to compare tour prices</p>
                        </div>
                        <div className='bg-[#FFF4EF] rounded-l-full w-[600px] h-[496px] relative left-[340px] -z-50 text-right'>
                            <div className='relative top-[200px] left-[150px] w-[400px] h-[496px]'>
                                <p className='text-[18px] font-bold'>Price Comparison: Find your best deals</p>
                                <p className='text-[18px] text-[#626262]'>Looking for the best deals on your next trip? Look no further! Our website offers a feature allowing you to compare tour prices</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative left-[400px] bottom-[470px]'>
                    <img src={Upcoming} className='w-[600px]' alt="" />
                </div>
                <div className='-mt-[300px]'></div>
            </div>
        </>
    )
}

export default details