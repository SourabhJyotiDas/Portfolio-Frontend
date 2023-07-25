import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import Loader from './Loader';
import { loginUser } from '../redux/actions/user';

export default function Login() {

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { loading, error, isAuthenticated } = useSelector((state) => state.user);


   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const loginHandle = async (e) => {
      e.preventDefault()
      setEmail("")
      setPassword("")
      await dispatch(loginUser(email, password))

   }

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [dispatch, error,])

   useEffect(() => {
      if (isAuthenticated) {
         navigate("/")
      }
   }, [isAuthenticated, navigate])


   return (
      <>
         {
            loading ? <Loader message="TRYING TO LOGIN " /> :
               <div className=' h-[auto] flex items-center bg-transparent justify-center md:mx-auto md:w-[50vw]'>
                  <div className='h-[auto] w-[100%] m-auto  py-5 rounded-md'>

                     <form onSubmit={loginHandle} className='flex flex-col justify-center items-center mt-10'>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' className='w-[90%] py-2 bg-transparent border border-gray outline-none my-2 px-2' />
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' className='w-[90%] py-2 bg-transparent border border-gray outline-none my-2 px-2' />
                        <button type='submit' className=' flex justify-center items-center bg-purple-800 w-[90%] py-3 my-5  text-white font-semibold'>Log in</button>
                        <div className='underline'> <Link to="/register">New user ? Register</Link></div>
                     </form>

                  </div>
               </div>
         }
      </>
   )
}
