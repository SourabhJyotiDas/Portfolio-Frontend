import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { registerUser } from '../redux/actions/user';

export default function Register() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");


   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { loading } = useSelector((state) => state.user);

   const submitHandler = async (e) => {
      e.preventDefault();
      await dispatch(registerUser(name, email, password));
      navigate("/")
   };

   useEffect(() => {
         window.scrollTo(0, 0)
   }, [dispatch]);

   
   return (
      <div>
         {
            loading ? <Loader message={"TRYING TO SIGNUP "} /> :
               <div className=' h-[auto] flex items-center justify-center md:w-[40vw] mx-auto'>
                  <div className='h-[auto] w-[100%] m-auto py-5 rounded-md'>

                     <form onSubmit={submitHandler} className='flex flex-col justify-center items-center mt-10'>
                        <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Name' className='w-[90%] py-2 border border-gray bg-transparent outline-none my-2 px-2' />
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' className='w-[90%] py-2 border border-gray bg-transparent outline-none my-2 px-2' />
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' className='w-[90%] py-2 border border-gray bg-transparent outline-none my-2 px-2' />

                        <button disabled={loading} type='submit' className=' flex justify-center items-center bg-purple-800 w-[90%] py-3 my-5  text-white font-semibold'>Sign up</button>
                        <div className='underline'> <Link to="/login">Already a user ? Login</Link></div>
                     </form>

                  </div>
               </div>
         }
      </div>
   )
}
