import React from 'react'
import Logo from '../../assest/Logo.png'
import { BiSearch } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";

function Navbar() {
    return (
        <>
            <div className='pt-10 pl-20'>
                <div className='flex flex-wrap'>
                    <a href="home">
                        <img src={Logo} alt="" />
                    </a>
                    <div className='flex gap-5 border-2 border-slate-300 rounded-full px-5 py-2 ml-[500px]'>
                        <a href="home">
                            <button className='text-[#C7C7C7]'>Home</button>
                        </a>
                        <a href="explore">
                            <button className='text-[#DE5013]'>Explore</button>
                        </a>
                    </div>
                    <div className='pt-2 rounded-full border-2 border-slate-300 px-2 ml-[400px]'>
                        <button>
                            <BiSearch color='#DE5013' size={30} />
                        </button>
                    </div>
                    <div className='pt-2 rounded-full border-2 border-slate-300 px-2 ml-[10px]'>
                        <button>
                            <BiHeart color='#DE5013' size={30} />
                        </button>
                    </div>
                    <div className='bg-[#DE5013] text-white px-10 pt-2 rounded-full ml-[10px]'>
                        <a href="#">
                            <button>Login</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar