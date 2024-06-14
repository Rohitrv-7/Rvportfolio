import React from 'react'
import './Home.css'
import Navbar from '../navbar/Navbar'
import Title from '../title/title'

function Home() {
  return (
    <>
    {/* <div className="h-screen border-b relative"> */}
      <div className="home h-screen border-b  w-full relative px-8 max-md:px-5 max-md:h-[500px]">
        <div className="absolute bottom-28 max-sm:bottom-12">
          <Title title="Let's Meet"/>
          <h1 className="font-[orish] text-6xl mt-4 max-sm:text-4xl">I'm Rohit Kumar</h1>
          <h1 className="font-[orish] text-6xl max-sm:text-4xl">MERN Stack Developer</h1>
          <div className="btn mt-4 flex gap-4">
            <a href="" className="border px-4 py-2 rounded-[20px] text-zinc-400">My Work <span><i className="ri-code-box-line"></i></span></a>
            <a href="" className="border px-4 py-2 rounded-[20px] text-zinc-400">Download CV <span><i className="ri-download-2-line"></i></span></a>
          </div>
        </div>
        {/* <div className="scroll w-[130px] h-[130px] absolute bottom-32 right-0">
          <img src="./images/scrollD.png" className='w-full h-full animate-spin' alt="" />
          <img src="./images/scrollL.png" className='w-full h-full animate-spin hidden' alt="" />
        </div> */}
      </div>
    {/* </div> */}
    </>
  )
}

export default Home