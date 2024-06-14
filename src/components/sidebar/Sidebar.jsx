import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar  border border-zinc-600 h-full w-1/4 rounded-lg py-6 px-6 backdrop-blur-md bg-zinc-800/50 sticky top-5 max-md:hidden">
        <div className="title flex items-center gap-2">
          <span><i className="ri-award-line text-5xl text-yellow-500"></i></span>
          <h1 className='text-3xl font-bold tracking-wider font-[orish] leading-6'>Rohitrv7</h1>
        </div>
        <div className="w-full flex justify-center items-center mt-3 rounded-lg overflow-hidden">
            <img src="/images/dp1.jpg" className='w-[170px] rounded-lg aspect-square' alt="" />
        </div>
        <div className="mt-4">
          <p className='xl text-zinc-300 font-[orish]'>Specilization</p>
          <h1 className='text-xl font-semibold leading-6 font-[orish]'>MERN Stack Developer</h1>
        </div>
        <div className="mt-5 leading-5 ">
          <p className=' text-zinc-300 font-[orish]'>Based in</p>
          <h1 className='text-xl font-semibold font-[orish]'>Jaipur, Rajasthan</h1>
        </div>
        <div className="icons text-2xl mt-6 flex justify-between">
          <a href='' className='border px-1 rounded-md'><i className="ri-linkedin-box-fill"></i></a>
          <a href='' className='border px-1 rounded-md'><i className="ri-codepen-line"></i></a>
          <a href='' className='border px-1 rounded-md'><i className="ri-github-fill"></i></a>
          {/* <a href='' className='border px-1 rounded-md'><i className="ri-dribbble-line"></i></a> */}
          <a href='' className='border px-1 rounded-md'><i className="ri-instagram-line"></i></a>
        </div>
        <div className="btn text-center mt-6 ">
          <a href="" className='px-4 py-3 rounded-[25px] bg-gradient-to-r from-sky-500 to-indigo-500 font-medium'>Let's Work Together!</a>
        </div>
    </div>
  )
}

export default Sidebar