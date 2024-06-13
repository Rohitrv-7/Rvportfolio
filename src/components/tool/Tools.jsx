import React from 'react'

function Tools() {
  return (
    <div className='p-8 mt-8 max-md:px-5'>
        <h1 className='text-4xl font-[orish]'>My Favouroits Tools</h1>
        <div className="tools grid grid-cols-5 gap-4 mt-5">
            <div className="tool border border-zinc-700 rounded-[20px] p-5">
            <i className="fi fi-brands-github"></i>
                <img src="" alt="" />
                <h1>Title</h1>
            </div>
            <div className="tool border border-zinc-700 rounded-[20px] p-5">
                <img src="" alt="" />
                <h1>Title</h1>
            </div>
            <div className="tool border border-zinc-700 rounded-[20px] p-5">
                <img src="" alt="" />
                <h1>Title</h1>
            </div>
            <div className="tool border border-zinc-700 rounded-[20px] p-5">
                <img src="" alt="" />
                <h1>Title</h1>
            </div>
            <div className="tool border border-zinc-700 rounded-[20px] p-5">
                <img src="" alt="" />
                <h1>Title</h1>
            </div>
            <div className="tool border border-zinc-700 rounded-[20px] p-5">
                <img src="" alt="" />
                <h1>Title</h1>
            </div>
        </div>
    </div>
  )
}

export default Tools