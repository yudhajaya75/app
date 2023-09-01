import React from 'react';
import Singapore from '../../assest/singapore.jpg';
import Bali from '../../assest/bali.webp';
import Lombok from '../../assest/lombok.webp';
import RajaEmpat from '../../assest/rajaampat.jpg';

function Card() {
    return (
        <>
            <div>
                <p className='text-[20px] font-bold ml-20'>Where is your next destination?</p>
                <div className='mx-20 pt-5'>
                    <div className='grid grid-cols-4 gap-5'>
                        <div className='relative rounded-lg overflow-hidden'>
                            <a href="#">
                                <img src={Singapore} className='rounded-lg w-full h-full' alt='' />
                                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'>
                                    <p className='text-white text-[18px] relative top-[180px] left-7'>Singapore</p>
                                </div>
                            </a>
                        </div>
                        <div className='relative rounded-lg overflow-hidden'>
                            <a href="#">
                                <img src={Bali} className='rounded-lg w-full h-full' alt='' />
                                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'>
                                    <p className='text-white text-[18px] relative top-[180px] left-7'>Bali</p>
                                </div>
                            </a>
                        </div>
                        <div className='relative rounded-lg overflow-hidden'>
                            <a href="#">
                                <img src={Lombok} className='rounded-lg w-full h-full' alt='' />
                                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'>
                                    <p className='text-white text-[18px] relative top-[180px] left-7'>Lombok</p>
                                </div>
                            </a>
                        </div>
                        <div className='relative rounded-lg overflow-hidden'>
                            <a href="#">
                                <img src={RajaEmpat} className='rounded-lg w-full h-full' alt='' />
                                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'>
                                    <p className='text-white text-[18px] relative top-[180px] left-7'>Raja Ampat</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;