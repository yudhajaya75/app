import React from 'react'
import { BiSearch } from "react-icons/bi";

function Search() {
    return (
        <>
            <div className='flex justify-center items-center gap-10 relative bottom-20'>
                <div className='p-8 w-[630px] rounded-full bg-white'>
                    <div className='border-2 px-[20px] py-[30px] w-[560px] rounded-full border-slate-300'>
                        <div className='rounded-lg '>
                            <div className='flex gap-10 w-[295px] mx-10'>
                                <input type="text" placeholder='Search destination, nature, or attraction' />
                                <input type="date" id="tanggal" name="tanggal" placeholder='Set your date journey' className=' mx-[-100px] px-[20px] relative left-[80px] py-2 rounded-full border-2 border-slate-300' />
                                <div className='relative left-[170px] bg-black rounded-full p-2'>
                                    <button className='relative top-1'>
                                        <BiSearch color='#fff' size={30} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search