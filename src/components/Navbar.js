import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu, GiRhinocerosHorn } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/user';


export default function Navbar(props) {
    const togglenav = () => {
        document.getElementById('burger').classList.toggle("hidden")
        document.getElementById('burgerClose').classList.toggle("hidden")
        document.getElementById('mobileList').classList.toggle("hidden")
    }

    const togglenav2 = () => {
        document.getElementById('burger').classList.toggle("hidden")
        document.getElementById('burgerClose').classList.toggle("hidden")
        document.getElementById('mobileList').classList.toggle("hidden")
        props.setProgress(100);
        setTimeout(() => {
            props.setProgress(0);
        }, 1000);

    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        await dispatch(logoutUser())
        navigate("/")
    }

    return (
        <div className=' sticky top-0 z-20 lg:hidden' >

            <nav className='py-2 px-4 flex justify-between items-center bg-[#1d1d1d] z-20'>

                <GiRhinocerosHorn className='text-2xl text-[#08fdd8]' />

                <div className='text-[#ffff]' onClick={togglenav}>
                    <GiHamburgerMenu className='burger' id='burger' />

                    <AiOutlineCloseCircle className='burger hidden' id='burgerClose' />
                </div>
            </nav>

            <div id='mobileList' className='hidden '>
                <div className='flex  flex-col h-[100vh] md:w-[50%] md:float-right md:border md:border-[#08fdd8]'>
                    <div className='h-[25%] flex flex-col justify-center items-center bg-[#1d1d1d] ' onClick={togglenav2}>
                        <h1 className='text-[#08fdd8] text-6xl font-bold ' ><Link to='/'>S</Link></h1>
                        <h2 className='text-2xl' ><Link to='/'>Sourabh</Link></h2>
                        <p className='text-gray-600 text-xs'>Web Developer</p>
                    </div>

                    <ul className=' bg-[#1d1d1d] flex flex-col justify-center items-center space-y-8  z-20 h-[100%] w-[100%] para '>
                        <Link to='/' className='hover:text-white hover:ease-in duration-100' onClick={togglenav2} ><span className='text-[#08fdd8]'>H</span>ome</Link>
                        <Link to='/project' className='hover:text-white hover:ease-in duration-100' onClick={togglenav2} ><span className='text-[#08fdd8]'>W</span>ork</Link>
                        <Link to='/skill' className='hover:text-white hover:ease-in duration-100' onClick={togglenav2} ><span className='text-[#08fdd8]'>S</span>kills</Link>
                        <Link to='/about' className='hover:text-white hover:ease-in duration-100' onClick={togglenav2} ><span className='text-[#08fdd8]'>A</span>bout</Link>
                        <Link to='/contact' className='hover:text-white hover:ease-in duration-100' onClick={togglenav2} ><span className='text-[#08fdd8]'>C</span>ontact</Link>
                        {
                            props.isAuthenticated ? <Link to='/' className='hover:text-white hover:ease-in duration-100' onClick={logoutHandler} ><span className='text-[#08fdd8]'>L</span>ogout</Link> :
                                <Link to='/login' className='hover:text-white hover:ease-in duration-100' onClick={togglenav2} ><span className='text-[#08fdd8]'>L</span>ogin</Link>
                        }

                    </ul>

                </div>
            </div>
        </div>
    )
}
