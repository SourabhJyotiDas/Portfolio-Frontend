import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../redux/actions/project';
import { Tilt } from 'react-tilt';


export default function Work() {
  const { projects, } = useSelector((state) => state.project);
  const dispatch = useDispatch()


  const modifiedArray = projects && projects.map((element, index) => {
    return element = { ...element, index }
  })

  const reverseArray = modifiedArray && modifiedArray.sort((a, b) => {
    return b.index - a.index
  })


  useEffect(() => {
    dispatch(getAllProjects())
    window.scrollTo(0, 0)
  }, [dispatch])
  return (
    <div className='md:my-20'>
      <div className='flex  flex-col justify-center items-start '>
        <div className='funky  md:py-0'> &lt;h2&gt;</div>
        <h1 className='heading  md:py-0 text-[#08fdd8] '>
          <div className=" flex md:mx-5">
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="200" data-aos-once="true">M</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="400" data-aos-once="true">y</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="600" data-aos-once="true"> &nbsp;</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">P</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">o</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">r</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1400" data-aos-once="true">t</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1600" data-aos-once="true">f</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">o</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">l</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="2200" data-aos-once="true">i</div>
            <div className="bounce myHide" data-aos="fade-right" data-aos-duration="2400" data-aos-once="true">o</div>
          </div>
        </h1>
        <div className='funky   md:py-0'> &lt;/h2&gt;</div>

        <div className='funky md:py-0 '> &lt;p&gt;</div>
        <div className='para md:py-0 md:mx-10'>
          <p className=' '>A small gallery of recent projects chosen by me. I've done them all just by me with some help of youtube. It's only a sort list compared to the entire list.</p>
          <p className=''>Interested to see some more? Visit <span className='text-[#08fdd8]'><Link to='/project'>my work </Link></span>page.</p>
        </div>
        <div className='funky md:py-0 '> &lt;/p&gt;</div>
      </div>


      <div className='funky  md:py-0'> &lt;section&gt;</div>
      <div className='flex flex-wrap '>

        {
          reverseArray && reverseArray.slice(0, 5).map((element) => (
            <div key={element._id} className="xl:w-1/4 lg:w-1/3 md:w-1/2 p-5 w-full h-full border-b-2 border-gray-800 border-opacity-75 md:border-none ">

              <Tilt>

                <a href={element.liveLink} target="_blank" rel="noopener noreferrer">
                  <img alt="ecommerce" className=" w-full h-[25vh] md:h-[auto]  block" src={element.img.url} />
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-2xl tracking-widest title-font mb-1 myFont">{element.techStack}</h3>
                    <h2 className="text-white text-sm myPara">{element.title}</h2>
                    <details className="mt-1 my-5 text-xs myPara text-gray-400">{element.description}</details>
                  </div>
                </a>
              </Tilt>



            </div>
          ))
        }

      </div>
      <div className='funky  md:py-0'> &lt;/section&gt;</div>

      <div className='funky  md:py-0 '> &lt;button&gt;</div>
      <div className='md:mx-10 resPadding'>
        <button className=' button-font  border-2 text-[#08fdd8]  border-[#08fdd8] hover:bg-[#08fdd8]  hover:text-black ease-in duration-300 tracking-widest md:px-10 md:py-3'>
          <Link to='/project'>See More </Link>
        </button>
      </div>
      <div className='funky  md:py-0'> &lt;/button&gt;</div>

    </div>
  )
}
