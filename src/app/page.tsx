import Navbar from '@/page/Navbar'
import React from 'react'
import Header from '@/page/Header'
import About from '@/page/About'
import Projects from '@/page/Projects'
import Contact from '@/page/Contact'
import Footer from '@/page/Footer'
import Spline from '@splinetool/react-spline/next';
const page = () => {
  return (
    <div>
    <Spline
        scene="https://prod.spline.design/TNGvDSjxKOYrdYjq/scene.splinecode" 
        className='fixed inset-0 pointer-events-none z-0'
      />
      <div className='fixed bottom-0 right-0  bg-white px-3 py-2 rounded-xl m-5 z-50'>Bandit Kaewnoi</div>
    <div>
      <Header />
      <About/> 
      <Projects/>
      <Contact/>
    </div>
    
    </div>
  )
}

export default page