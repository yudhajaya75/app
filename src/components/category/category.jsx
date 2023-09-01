import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Daytour from '../../assest/daytour.png'
import Hiking from '../../assest/hiking.png'
import Beach from '../../assest/beach.png'
import Climbing from '../../assest/climbing.png'
import Pet from '../../assest/pet.png'
import Skydiving from '../../assest/skydiving.png'
import Rafting from '../../assest/rafting.png'
import River from '../../assest/river.png'

function Category() {
    return (
        <>
            <div>
                <p className='text-[20px] font-bold ml-20 mt-20'>Category</p>
                <div className='mx-[70px]'>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <div className='flex justify-center items-center pt-10 mx-20'>
                            <div>
                                <SwiperSlide className='pt-5'>
                                    <a href='#'>
                                        <div className='bg-[#efecec] rounded-full w-[80px]'>
                                            <div className='flex gap-14 border-2 border-slate-400 rounded-full w-[180px] p-2 font-bold'>
                                                <img src={Daytour} className='relative left-3' alt="" />
                                                <p className='mt-1'>Day Tour</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className='pt-5'>
                                    <a href='#'>
                                        <div className='bg-[#efecec] rounded-full w-[80px]'>
                                            <div className='flex gap-14 border-2 border-slate-400 rounded-full w-[180px] p-2 font-bold'>
                                                <img src={Hiking} className='relative left-3' alt="" />
                                                <p className='mt-1'>Hiking</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className='pt-5'>
                                    <a href='#'>
                                        <div className='bg-[#efecec] rounded-full w-[80px]'>
                                            <div className='flex gap-14 border-2 border-slate-400 rounded-full w-[180px] p-2 font-bold'>
                                                <img src={Beach} className='relative left-3' alt="" />
                                                <p className='mt-1'>Beach</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className='pt-5'>
                                    <a href='#'>
                                        <div className='bg-[#efecec] rounded-full w-[80px]'>
                                            <div className='flex gap-14 border-2 border-slate-400 rounded-full w-[180px] p-2 font-bold'>
                                                <img src={Climbing} className='relative left-3' alt="" />
                                                <p className='mt-1'>Climbing</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className='pt-5'>
                                    <a href="#">
                                        <div className='bg-[#efecec] rounded-full w-[80px]'>
                                            <div className='flex gap-14 border-2 border-slate-400 rounded-full w-[200px] p-2 font-bold'>
                                                <img src={Pet} className='relative left-3' alt="" />
                                                <p className='mt-1'>Pet Friendly</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className='pt-5'>
                                    <a href='#'>
                                        <div className='bg-[#efecec] rounded-full w-[80px]'>
                                            <div className='flex gap-14 border-2 border-slate-400 rounded-full w-[200px] p-2 font-bold'>
                                                <img src={Skydiving} className='relative left-3' alt="" />
                                                <p className='mt-1'>Sky Diving</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className='pt-5'>
                                    <a href='#'>
                                        <div className='bg-[#efecec] rounded-full w-[80px]'>
                                            <div className='flex gap-14 border-2 border-slate-400 rounded-full w-[200px] p-2 font-bold'>
                                                <img src={Rafting} className='relative left-3' alt="" />
                                                <p className='mt-1'>Rafting</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide className='pt-5'>
                                    <a href='#'>
                                        <div className='bg-[#efecec] rounded-full w-[80px]'>
                                            <div className='flex gap-20 border-2 border-slate-400 rounded-full w-[180px] p-2 font-bold'>
                                                <img src={River} className='relative left-3' alt="" />
                                                <p className='mt-1'>River</p>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div >
        </>
    )
}

export default Category