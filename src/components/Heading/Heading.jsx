import React from 'react'

const Heading = (props) => {
    return (
        <div className='w-fit mx-auto'>
            <h2 className='md:text-5xl text-3xl font-bold'>
                <span className='text-orange-500'>{props.highlight}</span> {props.heading}
            </h2>
            <div className='md:w-34 w-24 h-1 bg-orange-400 md:mt-5 mt-3 ml-auto'></div>
        </div>
    )
}

export default Heading
