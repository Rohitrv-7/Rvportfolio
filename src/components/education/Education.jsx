import React from 'react'
import Title from '../title/title'

function Education() {
  return (
    <div className="education px-8 max-md:px-5">
        <Title title="Education" heading="Education And Pratical Experience" />
        <p className='mt-5 text-zinc-400'>Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise</p>
        <div className="education mt-16">
            <h1 className='text-4xl font-[orish] mb-10'>My Education</h1>
            <hr className='border border-zinc-600'/>
            <div className="divide grid grid-cols-5 gap-6">
              <div className="part py-7">2015-17</div>
              <div className="part col-span-2 py-7">
                <h1 className='text-2xl font-[orish] font-semibold'>High School</h1>
                <p className='text-zinc-400'>Saraswati Shiksha Niketan, Kanpur</p>
              </div>
              <div className="part col-span-2 py-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsam.</div>
            </div>
            <hr className='border border-zinc-600'/>
            <div className="divide grid grid-cols-5 gap-6">
              <div className="part py-7">2015-17</div>
              <div className="part col-span-2 py-7">
                <h1 className='text-2xl font-[orish] font-semibold'>High School</h1>
                <p className='text-zinc-400'>Saraswati Shiksha Niketan, Kanpur</p>
              </div>
              <div className="part col-span-2 py-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsam.</div>
            </div>
            <hr className='border border-zinc-600'/>
            <div className="divide grid grid-cols-5 gap-6">
              <div className="part py-7">2015-17</div>
              <div className="part col-span-2 py-7">
                <h1 className='text-2xl font-[orish] font-semibold'>High School</h1>
                <p className='text-zinc-400'>Saraswati Shiksha Niketan, Kanpur</p>
              </div>
              <div className="part col-span-2 py-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsam.</div>
            </div>
            <hr className='border border-zinc-600'/>
        </div>
    </div>
  )
}

export default Education