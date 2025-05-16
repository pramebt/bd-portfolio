import Navbar from '@/page/Navbar'
import React from 'react'
import Header from '@/page/Header'
import About from '@/page/About'
import Projects from '@/page/Projects'
import Contact from '@/page/Contact'
import Footer from '@/page/Footer'
const page = () => {
  return (
    <>
    <div className="bg-black min-h-screen md:px-20 px-10">
      <Navbar />
      <Header />
      <About/> 
      <Projects/>
      <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default page