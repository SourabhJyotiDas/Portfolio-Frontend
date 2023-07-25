import React from 'react'
import About from './About'
import Contact from './Contact'
import HeroSection from './HeroSection'
import Skills from './Skills'
import Work from './Work'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <div className='funky md:py-0'> &lt;html&gt;</div>
      <div className='funky md:py-0'> &lt;body&gt;</div>

      <div><HeroSection /></div>
      <div><Work /></div>
      <div ><About /></div>
      <div><Skills /></div>
      <div><Contact /></div>

      <div className='funky md:py-0'> &lt;/body&gt;</div>
      <div className='funky md:py-0'> &lt;/html&gt;</div>

    </div>
  )
}
