import React from 'react';
import { Link } from "react-router-dom";


export default function Sidenavbar() {
    return (
        <div>

            <div className='hidden xl:block sticky top-0 z-20'>
                <div className='h-[100vh] w-[10vw] bg-black flex justify-center items-center'>
                    <ul className=' flex flex-col justify-center items-center space-y-8  '>
                        <Link to='/' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >Home</Link>
                        <Link to='/project' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >Work</Link>
                        <Link to='/skill' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >Skills</Link>
                        <Link to='/about' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >About</Link>
                        <Link to='/contact' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >Contact</Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}
