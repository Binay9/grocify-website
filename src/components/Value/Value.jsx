import React from 'react' 
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Basket from '../../assets/grocery-value.png'

const Value = () => {

  const leftValues = value.slice(0,2).map(item=> {
    return(
      <div className='flex md:flex-row-reverse items-center gap-7' key={item.id}>
          <div>
            <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
          </div>
          <div className='md:text-right'>
            <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
            <p className='text-zinc-600'>{item.para}</p>
          </div>
      </div>
    )
  })

   const rightValues = value.slice(2).map(item=> {
    return(
      <div className='flex items-center gap-7' key={item.id}>
          <div>
            <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
          </div>
          <div className=''>
            <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
            <p className='text-zinc-600'>{item.para}</p>
          </div>
      </div>
    )
  })

  return (
    <div className='max-w-[1200px] mx-auto px-10 py-15'>
        <Heading highlight="Our" heading="Values" />

        <div className='flex md:flex-row flex-col gap-12 md:gap-15 mt-15'>

          {/* Left Value */}
          <div className='md:min-h-100 gap-12 flex flex-col justify-around'>
            {leftValues}
          </div>

          <div className='md:flex w-1/2 hidden'>
            <img src={Basket} />
          </div>

          {/* Right Value */}
          <div className='md:min-h-100 gap-12 flex flex-col justify-around'>
            {rightValues}
          </div>

        </div>
      
    </div>
  )
}

export default Value

const value = [
  {
    id: 1,
    title: "Trust",
    para: "Trust in a product means believing it will deliver on its promise every time.",
    icon: <FaHeart />
  },

  {
    id: 2,
    title: "Always Fresh",
    para: "Trust in freshness means knowing your product is as natural, safe, and pure as the day it was made.",
    icon: <FaLeaf />
  },

  {
    id: 3,
    title: "Food Safety",
    para: "Trust in food safety means confidence that every bite is pure, safe, and protected.",
    icon: <FaShieldAlt />
  },

  {
    id: 4,
    title: "100% Organic",
    para: "Trust in 100% organic means believing in purity, authenticity, and nature’s true promise.",
    icon: <FaSeedling />
  }

]
