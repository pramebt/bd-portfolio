import Navbar from '@/page/Navbar'
import React from 'react'
import Header from '@/page/Header'
import About from '@/page/About'
const page = () => {
  return (
    <div className="bg-black min-h-screen md:px-20 px-10">
      <Navbar />
      <Header />
      <About/> 
    </div>
  )
}

export default page