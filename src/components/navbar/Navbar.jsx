import React, { useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'

function Navbar() {

  const [mode, setMode] = useState("black");

  const frameMode = ()=>{
    mode ? setMode(false) : setMode(true)
  }

  const [menu, setMenu] = useState(false)
  // const [mode, setMode] = useState();
  const toggle = ()=>{
    menu ? setMenu(false) : setMenu(true)
  }

  return (
    <nav className="flex sticky top-0 z-10">
      <div className={`${mode? "bg-zinc-900/70" : "bg-zinc-50/70 text-zinc-900 border-b borderr-zinc-700"} relative flex w-full justify-between px-7 items-center pt-5 pb-2 border-b backdrop-blur-xl max-md:px-5`}>
        <h1 className='font-bold text-2xl md:hidden'>Rohitrv7</h1>
        <div className="flex gap-3 items-center max-md:hidden">
          <Link to='home' smooth={true} offset={-102} duration={500} className="active hover:border px-3 py-1 rounded-[20px] transition ease-in">Home</Link>
          <Link to='about' smooth={true} offset={-70} duration={500} className="px-3 py-1 rounded-[20px] transition ease-in duration-950 hover:border">About Me</Link>
          <Link to='portfolio' smooth={true} offset={-65} duration={500} className="px-3 py-1 rounded-[20px] transition ease-in duration-950 hover:border">Portfolio</Link>
          <Link to='testimonial' smooth={true} offset={-60} duration={500} className="px-3 py-1 rounded-[20px] transition ease-in duration-950 hover:border">Resume</Link>
          <Link to='contact' smooth={true} offset={-90} duration={500} className="px-3 py-1 rounded-[20px] transition ease-in duration-950 hover:border">Contact</Link>
        </div>
        <div className={`${menu ? "add" : "remove"} border w-[250px] p-5 bg-zinc-900/90 backdrop-blur-xl rounded-lg overflow-hidden`}>
          <ul className='flex flex-col gap-4'>
            <li className='text-2xl'><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li className='text-2xl'><Link to='about' smooth={true} offset={0} duration={500}>About</Link></li>
            <li className='text-2xl'><Link to='portfolio' smooth={true} offset={0} duration={500}>Portfolio</Link></li>
            <li className='text-2xl'><Link to='testimonial' smooth={true} offset={0} duration={500}>Testimonial</Link></li>
            <li className='text-2xl'><Link to='contact' smooth={true} offset={0} duration={500}>Contact</Link></li>
          </ul>
        </div>
        <div className="flex gap-6 items-center">
          <i onClick={frameMode} className={`${mode? "ri-sun-line" : "ri-moon-line"} text-xl cursor-pointer`}></i>
          {/* <i className="ri-sun-line text-xl cursor-pointer"></i> */}
          <i onClick={toggle} className={`${menu ? "ri-close-line anime" : "ri-menu-3-line anime"} text-3xl cursor-pointer md:hidden`}></i>
          {/* <i className={`ri-close-line text-3xl cursor-pointer md:hidden`}></i> */}
          <a href="" className="px-3 py-2 rounded-[20px] font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 text-black max-md:hidden">Let's Talk <span><i className="ri-message-2-line"></i></span></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar