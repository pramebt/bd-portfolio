import Navbar from '@/page/Navbar'
import React from 'react'
import Header from '@/page/Header'
import About from '@/page/About'
import Projects from '@/page/Projects'
import Contact from '@/page/Contact'
import Footer from '@/page/Footer'
import Spline from '@splinetool/react-spline/next';
import Image from 'next/image'
const page = () => {
  return (
    <div>
    <Spline
        scene="https://prod.spline.design/TNGvDSjxKOYrdYjq/scene.splinecode" 
        className='fixed inset-0 pointer-events-none z-0'
      />
      <div className='fixed flex flex-row items-center bottom-0 right-0 gap-2 bg-black px-2 py-2 rounded-xl m-5 z-50'>
        <Image
          src="/assets/icons/logobd.svg"
          alt="Bandit Kaewnoi"
          width={50}
          height={50}
          className="rounded-full w-7"
        />
        <p className='text-[12px] font-semibold text-white'>Bandit Kaewnoi</p>
      </div>
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