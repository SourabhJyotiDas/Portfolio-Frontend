import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewProject } from '../../redux/actions/project';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';


export default function Create() {

   const { loading } = useSelector((state) => state.project)
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [liveLink, setLiveLink] = useState("")
   const [githubLink, setGithubLink] = useState("")
   const [techStack, setTechStack] = useState("")
   const [image, setImage] = useState(null);


   const dispatch = useDispatch()
   const navigate = useNavigate()

   const submitHandle = async (e) => {
      e.preventDefault();
      await dispatch(createNewProject(title, description, liveLink, githubLink, techStack, image));
   }

   const handleImageChange = (e) => {
      const file = e.target.files[0];

      const Reader = new FileReader();
      Reader.readAsDataURL(file);

      Reader.onload = () => {
         if (Reader.readyState === 2) {
            setImage(Reader.result);
         }
      };
   };

   return (
      <div>
         {
            loading ? <Loader message={"CREATING NEW PROJECT"}/> :
               <div className=' h-[auto] flex items-center bg-transparent justify-center md:mx-auto md:w-[50vw]'>
                  <div className='h-[auto] w-[100%] m-auto  py-5 rounded-md'>

                     <form onSubmit={submitHandle} className='flex flex-col justify-center items-center mt-10'>
                        <input required value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='Enter Title' className='w-[90%] py-2 bg-transparent border border-gray outline-none my-2 px-2' />
                        <input required value={description} onChange={(e) => { setDescription(e.target.value) }} type="text" placeholder='Description' className='w-[90%] py-2 bg-transparent border border-gray outline-none my-2 px-2' />
                        <input required value={liveLink} onChange={(e) => { setLiveLink(e.target.value) }} type="text" placeholder='Live Link' className='w-[90%] py-2 bg-transparent border border-gray outline-none my-2 px-2' />
                        <input required value={githubLink} onChange={(e) => { setGithubLink(e.target.value) }} type="text" placeholder='GitHub Link' className='w-[90%] py-2 bg-transparent border border-gray outline-none my-2 px-2' />
                        <input required value={techStack} onChange={(e) => { setTechStack(e.target.value) }} type="text" placeholder='TechStack' className='w-[90%] py-2 bg-transparent border border-gray outline-none my-2 px-2' />


                        {image && <img className='h-[90%] w-[90%]  border-2 border-black' src={image} alt="post" />}

                        <input className='w-[90%]' type="file" accept='image/*' onChange={handleImageChange} />


                        <button type='submit' className=' flex justify-center items-center bg-purple-800 w-[90%] py-3 my-5  text-white font-semibold'>Create</button>
                     </form>

                  </div>
               </div>
         }
      </div>
   )
}
