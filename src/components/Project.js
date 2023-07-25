import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMyProject, getAllProjects } from '../redux/actions/project';
import { Link, useNavigate } from 'react-router-dom';
import Loader from "./Loader"

export default function Project() {

  const { projects,loading } = useSelector((state) => state.project);
  const { user } = useSelector((state) => state.user)

  const isAdmin = user && user.role === "admin"

  // console.log(isAdmin);

  const modifiedArray = projects && projects.map((element, index) => {
    return element = { ...element, index }
  })

  const reverseArray = modifiedArray && modifiedArray.sort((a, b) => {
    return b.index - a.index
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllProjects())
    window.scrollTo(0, 0)
  }, [dispatch])


  const handleDelete = async (id) => {
    await dispatch(deleteMyProject(id))
    navigate("/")
  }


  return (
    <>
      {
        loading ? <Loader message={"FETCHING ALL PROJECTS"} /> :
          <div>
            <div className='funky  md:py-0'> &lt;h2&gt;</div>
            <h1 className='heading  md:py-0 text-[#08fdd8] '>
              <div className=" flex md:mx-5">
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="200" data-aos-once="true">M</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="400" data-aos-once="true">y</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="600" data-aos-once="true"> &nbsp;</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">P</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">r</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">o</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1400" data-aos-once="true">j</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1600" data-aos-once="true">e</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">c</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">t</div>
                <div className="bounce myHide" data-aos="fade-right" data-aos-duration="2200" data-aos-once="true">s</div>
              </div>
            </h1>
            <div className='funky   md:py-0'> &lt;/h2&gt;</div>


            <div className='funky  md:py-0'> &lt;section&gt;</div>
            {
              isAdmin ? < Link to="/admin/create">
                <button className='button-font resMargin border text-[#08fdd8]  border-[#08fdd8] hover:bg-[#08fdd8]  hover:text-black ease-in duration-300 md:px-10 md:py-3 '> Create New</button>
              </Link> : null
            }
            <div className='flex flex-wrap '>

              {
                reverseArray?.map((element) => (
                  <div key={element._id} className="xl:w-1/4 lg:w-1/3 md:w-1/2 p-5 w-full h-full border-b-2 border-gray-800 border-opacity-75 md:border-none ">
                    <img alt="ecommerce" className=" w-full h-[25vh] md:h-[auto]  block" src={element.img.url} />
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-2xl tracking-widest title-font mb-1 myFont">{element.techStack}</h3>
                      <h2 className="text-white text-sm myPara">{element.title}</h2>
                      <details className="mt-1 my-5 text-xs myPara text-gray-400">{element.description}</details>
                    </div>
                    <div className='flex items-center md:p-0  justify-between  '>

                      <button className='button-font  border text-[#08fdd8]  border-[#08fdd8] hover:bg-[#08fdd8]  hover:text-black ease-in duration-300 '> <a href={element.liveLink} target="_blank" rel="noopener noreferrer">Demo</a></button>
                      <button className='button-font  border text-[#08fdd8]  border-[#08fdd8] hover:bg-[#08fdd8]  hover:text-black ease-in duration-300 '> <a href={element.githubLink} target="_blank" rel="noopener noreferrer">Github</a></button>
                      {isAdmin && <Link to={`/admin/project/${element._id}`}>
                        <button className='button-font  border text-[#08fdd8]  border-[#08fdd8] hover:bg-green-500  hover:text-black ease-in duration-300  '>Update</button>
                      </Link>}


                      {isAdmin && <button onClick={() => { handleDelete(element._id) }} className='button-font  border text-[#08fdd8]  border-[#08fdd8] hover:bg-red-500  hover:text-black ease-in duration-300  '>Delete</button>}

                    </div>

                  </div>
                ))
              }

            </div>
            <div className='funky  md:py-0'> &lt;/section&gt;</div>
          </div >
      }
    </>
  )
}


