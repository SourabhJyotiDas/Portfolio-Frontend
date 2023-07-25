import React, { useEffect } from 'react';


export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='lg:flex '>
      <div className='lg:w-[50%]'>

        <div className='funky  md:py-0 ' id='contact'> &lt;h2&gt;</div>

        <div><h1 className='heading   text-[#08fdd8] md:mx-5  md:py-0 '>
          <div className=" flex ">
            <div className="bounce" data-aos="fade-right" data-aos-duration="200" data-aos-once="true">C</div>
            <div className="bounce" data-aos="fade-right" data-aos-duration="400" data-aos-once="true">o</div>
            <div className="bounce" data-aos="fade-right" data-aos-duration="600" data-aos-once="true">n</div>
            <div className="bounce" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">t</div>
            <div className="bounce" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">a</div>
            <div className="bounce" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">c</div>
            <div className="bounce" data-aos="fade-right" data-aos-duration="1400" data-aos-once="true">t</div>
            <div className="bounce"> &nbsp;</div>
            <div className="bounce" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">m</div>
            <div className="bounce" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">e</div>
          </div>
        </h1></div>
        <div className='funky  md:py-0 '> &lt;/h2&gt;</div>

        <div className='funky  md:py-0 '> &lt;p&gt;</div>

        <p className='para md:mx-10  md:py-0 '>I'm Interested in freelance opportunities - <br /> especiallly ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.</p>
        <div className='funky  md:py-0 '> &lt;/p&gt;</div>


        <div className='funky  md:py-0 '> &lt;form&gt;</div>


        <div className='flex flex-col  para md:mx-5  md:py-0 lg:'>

          <form className='w-[100%] flex flex-col '
           action="https://formspree.io/f/mgeqandd" 
           method="POST"
           >

            <div className='flex flex-col md:flex-row md:space-x-2'>
              <input className='border-2 border-[#0a0d1d] border-b-[#08fdd8] cursor-pointer p-2 my-1 w-[100%] md:w-[50%] bg-[#2b2b2b] hover:border-2  hover:border-[#08fdd8]   outline-none' type="text" name="name" id="" placeholder='Name' required  data-aos="fade-up" data-aos-duration="500" data-aos-once="true" autoComplete='off'/>

              <input className='border-2 border-[#0a0d1d] border-b-[#08fdd8] cursor-pointer p-2 my-1 w-[100%] md:w-[50%] bg-[#2b2b2b] hover:border-2  hover:border-[#08fdd8]   outline-none' type="email" name="email" id="" placeholder='Email' required  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"  autoComplete='off'/>

            </div>
            <input className='border-2 border-[#0a0d1d] border-b-[#08fdd8] cursor-pointer p-2 my-1 w-[100%] bg-[#2b2b2b] hover:border-2  hover:border-[#08fdd8]   outline-none' type="subject" name="subject" id="" placeholder='Subject'  data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"  autoComplete='off'/>

            <input className='border-2 border-[#0a0d1d] border-b-[#08fdd8] cursor-pointer p-2 my-1 py-6 w-[100%] bg-[#2b2b2b]  hover:border-2  hover:border-[#08fdd8]   outline-none' type="text" name="message" id="message" placeholder='Message' required  data-aos="fade-up" data-aos-duration="2000" data-aos-once="true"  autoComplete='off'/>



          <div className='flex justify-end pt-4'>
            <button  type="submit" value="send" className='button-font  text-[#08fdd8]  border-2  border-[#08fdd8]  hover:bg-[#08fdd8]  hover:text-black ease-in duration-300 tracking-widest md:px-10 md:py-3' >Send message!</button>
          </div>
          </form>

        </div>

        <div className='funky md:py-0'> &lt;/form&gt;</div>

      </div>



     
      <div className='flex justify-center items-center py-10  '>
        <iframe className='map md:w-[100vw] lg:w-[50vw] lg:h-[100vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114084.42876586971!2d92.72556874146879!3d26.67605582640148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744c20b7dfbbb95%3A0x12c7aa98abf85080!2sTezpur%2C%20Assam!5e0!3m2!1sen!2sin!4v1662736825643!5m2!1sen!2sin" 
        // eslint-disable-next-line 
        loading="lazy" >
        </iframe>
      </div>


    </div>
  )
}
