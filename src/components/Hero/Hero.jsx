import React from 'react'
import Grocery from '../../assets/grocery.jpg'
import Button from '../Button/Button'


const Hero = () => {
  return (

    <section>
        <div className='min-h-screen max-w-[1200px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-20 pt-28'>

            {/* Hero Content */}
            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                <h1 className='md:text-5xl/14 text-3xl/11 font-bold mt-5'>
                    Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> In Your City
                </h1>
                <p className='text-zinc-500 md:text-lg text-md max-w-[500px] mt-6 mb-8'>
                    Bred for a high content of beneficial substances. Our products are all fresh and healty.
                </p>
                <Button content="Shop Now" />  


            </div>

             {/* Hero Image */}
            <div className='flex-2 md:ml-2 mt-4 md:mt-0'>
                <img src={Grocery} alt="Grocery Image" />
            </div>

        </div>
    </section>

  )
}

export default Hero
