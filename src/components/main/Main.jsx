import React from "react";
import './Main.css'
import Home from '../homepage/Home'
import About from "../aboutpage/About";
import Portfolio from "../portfolio/Portfolio";
import Navbar from "../navbar/Navbar";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Testimonial from "../testimonial/Testimonial";
import Contact from "../contact/Contact";
// import Tools from "../tool/Tools";
// import { Outlet, Link } from "react-router-dom";

function Main() {
  return (
    <div className="w-full h-full overflow-hidden">
    <Navbar />
    <Home />
    <Portfolio />
    <About />
    <Education />
    <Experience />
    {/* <Tools /> */}
    <Testimonial />
    <Contact />
    </div>
  );
}

export default Main;
