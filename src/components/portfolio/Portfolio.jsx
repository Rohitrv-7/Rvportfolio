import React from 'react'
import Title from '../title/title'

function Portfolio() {
  return (
    <div className='portfolio p-8 max-md:px-5'>
        <Title title="Portfolio" heading="Check Out My Featured Project"/>
        <div className="cards grid grid-cols-2 gap-12 mt-8 px-5 max-md:px-0 max-md:gap-6 max-sm:grid-cols-1">
            <div className="card border h-[300px] rounded-lg bg-[url('/images/music.jpg')] bg-cover bg-center relative">
                <div className="btn flex gap-3 absolute bottom-4 left-3">
                    <a href="" className='bg-zinc-600/60 px-4 py-1 rounded-[15px]'>git hub</a>
                    <a href="" className='bg-zinc-600/60 px-4 py-1 rounded-[15px]'>view</a>
                </div>
            </div>
            <div className="card border h-[300px] rounded-lg bg-[url('/images/electric.png')] bg-cover bg-center relative">
                <div className="btn flex gap-3 absolute bottom-4 left-3">
                    <a href="" className='bg-zinc-600/60 px-4 py-1 rounded-[15px]'>git hub</a>
                    <a href="" className='bg-zinc-600/60 px-4 py-1 rounded-[15px]'>view</a>
                </div>
            </div>
            <div className="card border h-[300px] rounded-lg bg-[url('/images/note.png')] bg-cover bg-center relative">
                <div className="btn flex gap-3 absolute bottom-4 left-3">
                    <a href="" className='bg-zinc-600/60 px-4 py-1 rounded-[15px]'>git hub</a>
                    <a href="" className='bg-zinc-600/60 px-4 py-1 rounded-[15px]'>view</a>
                </div>
            </div>
            <div className="card border h-[300px] rounded-lg bg-[url('/images/todo.png')] bg-cover bg-center relative">
                <div className="btn flex gap-3 absolute bottom-4 left-3">
                    <a href="" className='bg-zinc-600/60 px-4 py-1 rounded-[15px]'>git hub</a>
                    <a href="" className='bg-zinc-600/60 px-4 py-1 rounded-[15px]'>view</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio