import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/user';

export default function Sidenavbar() {

    const { isAuthenticated } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await dispatch(logoutUser())
        navigate("/")
    }

    return (
        <div>

            <div className='hidden lg:block sticky top-0 z-20'>
                <div className='h-[100vh] w-[15vw] bg-black flex justify-center items-center'>
                    <ul className=' flex flex-col justify-center items-center space-y-8  '>
                        <Link to='/' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >Home</Link>
                        <Link to='/project' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >Work</Link>
                        <Link to='/skill' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >Skills</Link>
                        <Link to='/about' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >About</Link>
                        <Link to='/contact' className='hover:text-[#08fdd8]  hover:ease-in duration-100'  >Contact</Link>
                        {
                            isAuthenticated ? <Link to='/' className='hover:text-white hover:ease-in duration-100' onClick={logoutHandler} >Logout</Link> :
                                <Link to='/login' className='hover:text-white hover:ease-in duration-100' >Login</Link>
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}
