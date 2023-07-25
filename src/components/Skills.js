import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className='flex flex-col justify-center items-start md:h-[80vh] '>
        <div className='funky  md:py-0 ' > &lt;h2&gt;</div>

        <div><h1 className='heading text-[#08fdd8] md:mx-5  md:py-0 '>
          <div className=" flex flex-col leading-none">
            <div className='flex '> 
              <div className="bounce" data-aos="fade-right" data-aos-duration="200" data-aos-once="true">S</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="400" data-aos-once="true">k</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="600" data-aos-once="true">i</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">l</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">l</div>
              <div className="bounce"> &nbsp;</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">&</div>
            </div>
            <div className='flex'>
              <div className="bounce" data-aos="fade-right" data-aos-duration="200" data-aos-once="true">E</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="400" data-aos-once="true">x</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="600" data-aos-once="true">p</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">e</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">r</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">i</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="1400" data-aos-once="true">e</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="1600" data-aos-once="true">n</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">c</div>
              <div className="bounce" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">e</div>
            </div>
          </div>
        </h1></div>
        <div className='funky  md:py-0 '> &lt;/h2&gt;</div>


        <div className='funky  md:py-0 '> &lt;p&gt;</div>

        <div className='space-y-5 para md:mx-10 md:py-0'>
          <p>The main area of my experience is front end development (client side of the web).</p>
          <p>HTML, CSS, JS. Building small and medium web apps with React, features, animations, and coding interactive layouts. </p>
          <p>I have also full-stack developer experience with MERN (MongoDb, Express, React, Node). </p>
          <p>Visit my <span className='text-[#08fdd8]  underline '><a href="https://www.linkedin.com/in/sourabh-jyoti-das-a36460256/">Linkedin</a> </span> profile for more details or just
            <span className='text-[#08fdd8]  underline'><Link to='/contact'> contact</Link></span> me.</p>
          <p></p>
        </div>
        <div className='funky  md:py-0 '> &lt;/p&gt;</div>

      </div>
    </div>
  )
}
