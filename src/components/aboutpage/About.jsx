import React from 'react'
import Title from '../title/title'

function About() {
  return (
    <div className='about p-8 max-md:px-5'>
      <Title title="About Me" heading="Turning Complex Problem Into Simple Design"/>
      {/* <h1 className='text-6xl font-bold font-[orish]'>Into Simple Design</h1> */}
      <div className="cards grid grid-cols-3 gap-10 mt-10 max-sm:gap-2">
        <div className="card border border-zinc-700 flex flex-col justify-center items-center py-5 rounded-[15px]">
          <h1 className='text-4xl text-zinc-400 font-bold'>40+</h1>
          <p className='text-zinc-400 text-center'>Happy clients</p>
        </div>
        <div className="card border border-zinc-700 flex flex-col justify-center items-center py-5 rounded-[15px]">
          <h1 className='text-4xl text-zinc-400 font-bold'>2+</h1>
          <p className='text-zinc-400 text-center'>Years Of Experience</p>
        </div>
        <div className="card border border-zinc-700 flex flex-col justify-center items-center py-5 rounded-[15px]">
          <h1 className='text-4xl text-zinc-400 font-bold'>10+</h1>
          <p className='text-zinc-400 text-center'>Projects Done</p>
        </div>
      </div>
      <div className="content grid grid-cols-3 gap-10 mt-7 max-md:grid-cols-1">
        <div className="dics col-span-2">
          <p className='text-zinc-300'>I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle!</p>
          <p className='mt-3 text-zinc-300'>Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.</p>
        </div>
        <div className="info max-md:hidden">
          <p className='text-zinc-400'>Name</p>
          <h1 className='font-semibold font-[orish]'>Rohit Kumar</h1>
          <p className='text-zinc-400 mt-3'>Phone</p>
          <h1 className='font-semibold font-[orish]'>+91 7970321084</h1>
          <p className='text-zinc-400 mt-3'>Email</p>
          <h1 className='font-semibold font-[orish]'>rohitrvs07@gmail.com</h1>
          <p className='text-zinc-400 mt-3'>Location</p>
          <h1 className='font-semibold font-[orish]'>Jaipur, Rajasthan</h1>
        </div>
      </div>
      <a href="" className='rounded-[20px] px-5 py-2 mt-5 inline-block bg-gradient-to-l from-cyan-500 to-blue-500'>Download CV <span><i class="ri-download-2-line"></i></span></a>
      <div className="grid grid-cols-2 gap-10 mt-6 max-md:gap-3 max-sm:grid-cols-1">
        <div className="card border rounded-[10px] p-5 max-md:px-4">
            <h1 className='font-[orish] text-3xl tracking-wider'>Frontend <br /> Developer</h1>
            <span className='border border-zinc-400 px-3 py-1 rounded-[20px] mt-2 inline-block text-zinc-500 text-sm'>UI/UX Design</span>
            <span className='border border-zinc-400 px-3 py-1 rounded-[20px] ms-3 inline-block text-zinc-500 text-sm max-md:mt-2 max-md:ms-0 max-sm:ms-3'>Design To Code</span>
            <p className='mt-3 text-zinc-300'>I work with HTML, CSS, Tailwind, JavaScript, Framer, GSAP.</p>
            <div className="img w-full h-[200px] object-cover overflow-hidden border rounded-lg mt-3">
                <img src="/images/frontend.jpg" className='object-cover h-full w-full' alt="" />
            </div>
        </div>
        <div className="card border rounded-[10px] p-5">
            <h1 className='font-[orish] text-3xl tracking-wider'>Backend <br /> Developer</h1>
            <span className='border border-zinc-400 px-3 py-1 rounded-[20px] mt-2 inline-block text-zinc-500 text-sm'>Learn Node Js</span>
            <span className='border border-zinc-400 px-3 py-1 rounded-[20px] ms-3 inline-block text-zinc-500 text-sm max-md:mt-2 max-md:ms-0 max-sm:ms-2'>Explore To Code</span>
            <p className='mt-3 text-zinc-300'>I work with NodeJs, ExpresJs, ejs, MonogoDb, React.</p>
            <div className="img w-full h-[200px] overflow-hidden border rounded-lg mt-3">
                <img src="/images/backend.jpg" className="object-cover h-full w-full" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About