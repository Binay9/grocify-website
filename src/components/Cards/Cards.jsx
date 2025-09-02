import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({ image, name, price, id }) => {

    return (
 
        <div className='bg-zinc-100 p-3 rounded-xl' key={id}>

            {/* Icon */}
            <div className='flex justify-between mb-1'>

                <span className='text-3xl text-zinc-300'>
                    <FaHeart />
                </span>

                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-2 py-1 rounded'>
                    <FaPlus />
                </button>

            </div>

            {/* Image */}

            {/* 1st method */}

            {/* <div className='w-full h-50'>
            <img src={image} className='w-full h-full image-contain rounded-lg' />
        </div> */}

            <div className='md:min-h-[30vh] min-h-[40vh] md:max-w-[340px] md:mx-auto rounded-xl'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} >
            </div>

            {/* Content */}
            <div className='text-center'>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='text-2xl font-bold my-2'>£{parseInt(price).toFixed(2)}</p>
                <Button content='Show Now' />

            </div>

        </div>
    )
}

export default Cards

