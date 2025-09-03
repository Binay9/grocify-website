import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
import { PiFactory, PiPlant } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'
import { BsTruck } from 'react-icons/bs'

const Process = () => {

    const renderSteps = steps.map(item => {
        return (
            <div className={`my-20 md:my-0 md:flex-1 ${item.id % 2 === 0 ? 'md:mb-40': 'md:mt-40'} `} key={item.id}>

                {/* Round Number  */}
                <span className='flex justify-center items-center mx-auto w-15 h-15 rounded-full text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed'>{item.number}</span>

                <div className='flex items-center gap-x-2 mt-3 md:mt-5'>
                       <div>
                         <span className='flex items-center justify-center w-11 h-11 text-3xl rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-white'>{item.icon}</span>
                       </div>
                    
                    <div className=''>
                        <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
                        <p className='text-zinc-400 mt-2'>{item.para}</p>
                    </div>

                </div>
            </div>
        )
    })

    return (
        <div className='max-w-[1200px] mx-auto px-10 py-30'>
            <div className='w-fit mr-auto py-10'>
                <h2>
                    <Heading highlight='Our' heading='Process' />
                </h2>
            </div>

            <div className='flex-col md:flex md:flex-row items-center justify-center mt-15'>
                {renderSteps}
            </div>

        </div>
    )
}

export default Process

const steps = [
    {
        id:1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a very tursted out sourcing company',
        icon: <PiPlant />
    },

      {
        id:2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a very tursted manufacturing company',
        icon: <PiFactory />
    },

    {
        id:3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a very tursted quality control company',
        icon: <SlBadge />
    },

    {
        id:4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a very tursted logistics company',
        icon: <BsTruck />
    },
];
