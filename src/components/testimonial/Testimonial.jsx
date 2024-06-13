import React, { useRef } from 'react'
import Title from '../title/title'
// import './Testimonial.css'

function Testimonial() {

    const slider = useRef();
    let tx = 0;

    const slideNext = ()=>{
        if(tx > -75){
            tx-=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
        }
        
    const slidePrev = ()=>{
        if(tx < 0){
            tx+=25
            }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className="testimonial p-8 mt-6 overflow-hidden max-md:px-5">
        <Title title="Testimonial" heading="Clients Say About Me" />
        <div ref={slider} className="cards w-[400%] mt-7 flex gap-5 overflow-x-hidden transition ease-in-out">
            <div className="card border w-[100%] p-6 rounded-[25px] max-md:p-3 max-md:rounded-lg">
                <div className="pro flex gap-3">
                    <img src="./images/dp.jpg" alt="" className='w-[90px] h-[90px] rounded-lg' />
                    <div className="proin">
                        <h1 className='text-xl font-[orish] font-semibold'>Rohit Kumar</h1>
                        <p>Frontend Developer</p>
                        <span><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i></span>
                    </div>
                </div>
                <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex distinctio libero fugit modi explicabo cumque dolorem. Consequatur quod consequuntur aspernatur animi eligendi praesentium vitae asperiores libero cumque, fugit repellat maiores? Eos praesentium, veniam repudiandae minima aperiam laborum.</p>
                <a href="" className='font-[orish] mt-4 inline-block text-blue-300'>Project Page <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="card border w-[100%] p-6 rounded-[25px] max-md:p-3 max-md:rounded-lg">
                <div className="pro flex gap-3">
                    <img src="./images/dp1.jpg" alt="" className='w-[90px] h-[90px] rounded-lg' />
                    <div className="proin">
                        <h1 className='text-xl font-[orish] font-semibold'>Saurabh Kumar</h1>
                        <p>Backend Developer</p>
                        <span><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i></span>
                    </div>
                </div>
                <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex distinctio libero fugit modi explicabo cumque dolorem. Consequatur quod consequuntur aspernatur animi eligendi praesentium vitae asperiores libero cumque, fugit repellat maiores? Eos praesentium, veniam repudiandae minima aperiam laborum.</p>
                <a href="" className='font-[orish] mt-4 inline-block text-blue-300'>Project Page <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="card border w-[100%] p-6 rounded-[25px] max-md:p-3 max-md:rounded-lg">
                <div className="pro flex gap-3">
                    <img src="./images/dp.jpg" alt="" className='w-[90px] h-[90px] rounded-lg' />
                    <div className="proin">
                        <h1 className='text-xl font-[orish] font-semibold'>Roni Kumar</h1>
                        <p>UI/UX</p>
                        <span><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i></span>
                    </div>
                </div>
                <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex distinctio libero fugit modi explicabo cumque dolorem. Consequatur quod consequuntur aspernatur animi eligendi praesentium vitae asperiores libero cumque, fugit repellat maiores? Eos praesentium, veniam repudiandae minima aperiam laborum.</p>
                <a href="" className='font-[orish] mt-4 inline-block text-blue-300'>Project Page <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="card border w-[100%] p-6 rounded-[25px] max-md:p-3 max-md:rounded-lg">
                <div className="pro flex gap-3">
                    <img src="./images/dp1.jpg" alt="" className='w-[90px] h-[90px] rounded-lg' />
                    <div className="proin">
                        <h1 className='text-xl font-[orish] font-semibold'>Somya Thakur</h1>
                        <p>Website designer</p>
                        <span><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i></span>
                    </div>
                </div>
                <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex distinctio libero fugit modi explicabo cumque dolorem. Consequatur quod consequuntur aspernatur animi eligendi praesentium vitae asperiores libero cumque, fugit repellat maiores? Eos praesentium, veniam repudiandae minima aperiam laborum.</p>
                <a href="" className='font-[orish] mt-4 inline-block text-blue-300'>Project Page <i className="ri-arrow-right-line"></i></a>
            </div>
            {/* <div className="card border w-[100%] p-6 rounded-[25px] max-md:p-3 max-md:rounded-lg">
                <div className="pro flex gap-3">
                    <img src="./images/dp.jpg" alt="" className='w-[90px] h-[90px] rounded-lg' />
                    <div className="proin">
                        <h1 className='text-xl font-[orish] font-semibold'>Rocky Kumar</h1>
                        <p>Frontend Developer</p>
                        <span><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i></span>
                    </div>
                </div>
                <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex distinctio libero fugit modi explicabo cumque dolorem. Consequatur quod consequuntur aspernatur animi eligendi praesentium vitae asperiores libero cumque, fugit repellat maiores? Eos praesentium, veniam repudiandae minima aperiam laborum.</p>
                <a href="" className='font-[orish] mt-4 inline-block'>Project Page <i className="ri-arrow-right-line"></i></a>
            </div> */}
        </div>
        <div className="btn flex gap-3 mt-3 ms-2">
            <div onClick={slidePrev} className="left border w-[50px] h-[50px] rounded-full flex justify-center items-center text-3xl cursor-pointer"><i className="ri-arrow-left-s-line"></i></div>
            <div onClick={slideNext} className="right border w-[50px] h-[50px] rounded-full flex justify-center items-center text-3xl cursor-pointer"><i className="ri-arrow-right-s-line"></i></div>
        </div>
    </div>
  )
}

export default Testimonial