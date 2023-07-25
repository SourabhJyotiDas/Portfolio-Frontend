import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className=' md:flex md:flex-col md:justify-center md:items-start'>

        <div className='funky  md:py-0 '> &lt;h2&gt;</div>

        <h1 className='heading  text-[#08fdd8] md:mx-5  md:py-0 '>
          <div className=" flex ">
            <div className="bounce"  data-aos="fade-right" data-aos-duration="200" data-aos-once="true">M</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="400" data-aos-once="true">e</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="600" data-aos-once="true">,</div>
            <div className="bounce"> &nbsp;</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="800" data-aos-once="true">M</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">y</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">s</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="1400" data-aos-once="true">e</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="1600" data-aos-once="true">l</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">f</div>
            <div className="bounce"> &nbsp;</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">a</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="2200" data-aos-once="true">n</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="2400" data-aos-once="true">d</div>
            <div className="bounce"> &nbsp;</div>
            <div className="bounce"  data-aos="fade-right" data-aos-duration="2600" data-aos-once="true">I</div>
          </div>
        </h1>

        <div className='funky  md:py-0 '> &lt;/h2&gt;</div>

        <div className='funky  md:py-0 '> &lt;p&gt;</div>

        <div className=' flex flex-col items-start justify-center md:mx-10'>
          <div className='space-y-5 para  md:py-0 '>
            <p>Professionally connected with the web development industry and information technology for more than 2 years.</p>
            <p>Well organised person, problem solver, independent employee with high attention to details. Fan of Football, outdoor activities, Web series and fps shooter games.</p>
            <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
            <p></p>
          </div>

        </div>
        <div className='funky  md:py-0 '> &lt;/p&gt;</div>


      </div>
    </>
  )
}
