import React from "react";

export default function HeroSection() {


    return (
        <div id="home">
            <div className='flex homeScreen justify-start items-center md:h-[60vh]' >

                <div className='data  '>
                    <div className='funky md:py-0'> &lt;h1&gt;</div>
                    <div className=' myH1  tracking-widest leading-none md:mx-7 md:text-[4.5rem] lg:text-[5rem] md:py-0' >
                        <div className=" flex ">
                            <div className="bounce  " data-aos="fade-right" data-aos-duration="200" data-aos-once="true">H</div>
                            <div className="bounce  " data-aos="fade-right" data-aos-duration="400" data-aos-once="true">i</div>
                            <div className="bounce  " data-aos="fade-right" data-aos-duration="600" data-aos-once="true">,</div>
                        </div>

                        <div className=" flex ">
                            <div className="bounce" data-aos="fade-right" data-aos-duration="200" data-aos-once="true">I</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="400" data-aos-once="true">'</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="600" data-aos-once="true">m</div>
                            <div className=""> &nbsp;</div>
                            <div className="bounce  text-[#08fdd8]" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">S</div>
                            <div className="bounce " data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">o</div>
                            <div className="bounce " data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">u</div>
                            <div className="bounce " data-aos="fade-right" data-aos-duration="1400" data-aos-once="true">r</div>
                            <div className="bounce " data-aos="fade-right" data-aos-duration="1600" data-aos-once="true">a</div>
                            <div className="bounce " data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">b</div>
                            <div className="bounce " data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">h</div>
                            <div className="bounce " data-aos="fade-right" data-aos-duration="2200" data-aos-once="true">,</div>
                        </div>



                        <div className=" flex ">
                            <div className="bounce" data-aos="fade-right" data-aos-duration="200" data-aos-once="true">w</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="400" data-aos-once="true">e</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="600" data-aos-once="true">b <br /></div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="800" data-aos-once="true"> &nbsp;</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">d</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">e</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="1400" data-aos-once="true">v</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="1600" data-aos-once="true">e</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">l</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">o</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="2200" data-aos-once="true">p</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="2400" data-aos-once="true">e</div>
                            <div className="bounce" data-aos="fade-right" data-aos-duration="2600" data-aos-once="true">r</div>
                        </div>

                    </div>
                    <div className='funky md:py-0'> &lt;/h1&gt;</div>



                    <div className='funky   md:py-0'> &lt;p&gt;</div>
                    <p className='para text-gray-500 capitalize md:mx-7 md:py-0'>FullStack developer / MERN</p>
                    <div className='funky  md:py-0 '> &lt;/p&gt;</div>



                    <div className='funky  md:py-0'> &lt;button&gt;</div>
                    <div className='flex items-center md:p-0 md:mx-7 resPadding  '>
                            <button className='button-font resMargin border text-[#08fdd8]  border-[#08fdd8] hover:bg-[#08fdd8]  hover:text-black ease-in duration-300 md:px-10 md:py-3 '><a href="#contact"> Contact me!</a></button>

                            <button className='button-font resMargin border text-[#08fdd8]  border-[#08fdd8] hover:bg-[#08fdd8]  hover:text-black ease-in duration-300 md:px-10 md:py-3'><a href="#home"> My resume</a></button>

                    </div>
                    <div className='funky md:py-0'> &lt;/button&gt;</div>


                </div>

                <div className=" hidden xl:block">
                    {/* img */}
                </div>
            </div>

        </div>
    )
}
