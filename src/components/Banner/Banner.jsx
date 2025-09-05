import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div>
        <div className='bg-cover bg-center h-[50vh] flex justify-center items-center mt-25 bg-cover relative' 
            style={{
                backgroundImage: `url(${bgImage})`
            }}>
                <h2 className='text-5xl text-zinc-800 bg-white p-4 rounded-xl font-bold z-10'>{title}</h2>
                <div className='bg-black/40 absolute inset-0'></div>
        </div>
    </div>
  )
}

export default Banner
