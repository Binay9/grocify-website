import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruit&veggies.jpg'
import DairyCat from '../../assets/dairy.jpg'
import MeatCat from '../../assets/meat&fish.jpg'
import { Link } from 'react-router-dom'

const Category = () => {

    const renderCards = category.map(card => {
        return (

            //Card
            <div className='flex-1 mb-[40px]' key={card.id}>

                 {/* Card Image  */}

                <div className='md:min-h-[30vh] min-h-[40vh] md:max-w-[340px] md:mx-auto rounded-xl'
                    style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }} >
                </div>

                {/* Card Content */}
                <div className='bg-zinc-100 md:pt-5 pt-8 p-8 rounded-xl'>
                    <h3 className='text-zinc-800 text-3xl font-bold '>{card.title}</h3>
                    <p className='text-zinc-400 my-4'>{card.description}</p>
                    <Link to="/fruits" className='bg-gradient-to-b from-orange-400 to-orange-500 text-white md:px-5 px-3 md:py-3 py-2 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</Link>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1200px] mx-auto px-10 py-15'>

                <Heading highlight="Shop" heading="by Category" />

                {/* Render Category Cards */}
                <div className='md:flex gap-10 md:mt-15 mt-8 '>
                    {renderCards}
                </div>

            </div>
        </section>
    )
}

export default Category


{/* Category Cards */ }

const category = [
    {
        id: 1,
        title: 'Fruits & Veggies',
        description: 'Fruits and vegetables are natural, minimally processed foods that come straight from the earth. They are packed with essential vitamins, minerals and fiber.',
        image: FruitsCat
    },

    {
        id: 2,
        title: 'Dairy',
        description: 'Fresh dairy products are foods made from milk that are minimally processed and consumed soon after production to maintain their natural taste, texture, and nutrients.',
        image: DairyCat
    },
    {
        id: 3,
        title: 'Meat & Sea Food',
        description: 'Fresh meat and fish products that are recently prepared, not frozen for long, and kept in their natural state. They taste better, are full of protein and nutrients.',
        image: MeatCat
    }

]

