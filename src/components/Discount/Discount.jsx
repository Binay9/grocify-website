import React from 'react'
import Button from '../Button/Button'
import FreshCover from '../../assets/grocery-discount.png'

const Discount = () => {
    return (
        <section className='bg-zinc-200 bg-no-repeat bg-right bg-size-[40%]' style={{backgroundImage: `url(${FreshCover})` }}>
            <div className='md:flex max-w-[1200px] mx-auto px-10 py-15'>

                <span className='md:text-9xl text-5xl text-orange-500 font-bold transfrom md:-rotate-90 h-fit self-center'>20%</span>

                <div className='max-w-[700px]'>
                    <h3 className='md:text-7xl text-5xl text-zinc-800 font-bold'>First Order Discount</h3>

                    <p className='md:text-zinc-700 text-zinc-900 my-5'>Enjoy an exclusive discount on your first order as a warm welcome from us. It's the perfect chance to try our products at a special price. Don't miss out shop today and start saving!</p>

                    <Button content='Get a Discount' />
                </div>


            </div>
        </section>
    )
}

export default Discount
