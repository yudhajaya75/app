import React from 'react'
import Earth from '../../assest/earth.png'
import Global from '../../assest/global.png'
import Comunity from '../../assest/comunity.png'

function desc() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='w-[1450px] flex gap-[30px] my-20 mx-20'>
                    <div className='w-[1000px] text-center'>
                        <div className='flex flex-col items-center justify-center border-2 rounded-lg border-slate-400 p-20'>
                            <img src={Earth} alt="" className='w-[100px] h-[100px]' />
                            <div className='w-[300px]'>
                                <p className='text-[20px]'>Various destinations and activities</p>
                                <p className='text-[#B5BAC3] text-[14px]'>Discover breathtaking destinations around the globe, from pristine beaches and lush jungles to charming historical cities and captivating landscapes.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[1000px] text-center'>
                        <div className='flex flex-col items-center justify-center border-2 rounded-lg border-slate-400 p-20'>
                            <img src={Global} alt="" className='w-[100px] h-[100px]' />
                            <div className='w-[300px]'>
                                <p className='text-[20px]'>Various destinations and activities</p>
                                <p className='text-[#B5BAC3] text-[14px]'>Discover breathtaking destinations around the globe, from pristine beaches and lush jungles to charming historical cities and captivating landscapes.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[1000px] text-center'>
                        <div className='flex flex-col items-center justify-center border-2 rounded-lg border-slate-400 p-20'>
                            <img src={Comunity} alt="" className='w-[100px] h-[100px]' />
                            <div className='w-[300px]'>
                                <p className='text-[20px]'>Various destinations and activities</p>
                                <p className='text-[#B5BAC3] text-[14px]'>Discover breathtaking destinations around the globe, from pristine beaches and lush jungles to charming historical cities and captivating landscapes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default desc