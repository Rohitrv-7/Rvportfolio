import React from 'react'

function title(props) {
  return (
    <>
    <span className="border border-zinc-500 rounded-[15px] px-2 py-1 text-sm"><i className="ri-add-line me-1"></i>{ props.title }</span>
    <h1 className='text-6xl font-bold font-[orish] mt-4 max-md:text-6xl max-sm:text-3xl'>{ props.heading }</h1>
    </>
  )
}

export default title