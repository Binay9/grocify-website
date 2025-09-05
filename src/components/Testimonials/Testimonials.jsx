import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Person1 from '../../assets/person1.jpg'
import Person2 from '../../assets/person2.jpg'
import Person3 from '../../assets/person3.jpg'
import Person4 from '../../assets/person4.jpg'
import Person5 from '../../assets/person5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';


const Testimonials = () => {
  return (
    <section>
      <div className='max-w-[1200px] mx-auto px-10 pb-20'>
        <Heading highlight="Customers" heading="Saying" />

        <div className='flex justify-end p-y-3 gap-x-1 my-5 md:my-3'>
          <button className='custom-prev text-2xl text-zinc-800 rounded-lg w-10 h-10 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <IoIosArrowBack />
          </button>

          <button className='custom-next text-2xl text-zinc-800 rounded-lg w-10 h-10 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <IoIosArrowForward />
          </button>

        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]} className="mySwiper">
          {

            //Review Cards
            review.map(item => {
              return (

                <SwiperSlide className='bg-zinc-100 p-5 rounded-xl' key={item.id}>

                  <div className='flex gap-5 items-center'>

                      <div className='bg-orange-300 rounded-full h-16 w-16 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                        <img src={item.image} className='w-full h-full' />
                      </div>

                      <div>
                          <h5 className='text-xl font-bold'>{item.name}</h5>
                          <p className='text-zinc-600'>{item.profession}</p>
                          <span className='flex text-yellow-400 mt-2 gap-1'>{Array.from({ length: item.rating }, (_, index) => (
                            <FaStar />
                          ))}</span>
                      </div>
                  </div>

                  <div className='mt-10 min-h-[15vh]'>
                    <p className='text-zinc-600'>{item.para}</p>
                  </div>

                </SwiperSlide>

              )
            })
          }
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials


const review = [
  {
    id: 1,
    name: 'Jhon Smith',
    profession: 'Food Blogger',
    rating: 4,
    para: 'The apples are always crisp, juicy, and naturally sweet. They stay fresh for days and are perfect for snacking or baking.',
    image: Person1
  },
  {
    id: 2,
    name: 'David Carter',
    profession: 'Business Man',
    rating: 3,
    para: 'The juice is refreshing with just the right sweetness. It tastes natural and not overloaded with sugar.',
    image: Person2
  },

  {
    id: 3,
    name: 'Robin Hood',
    profession: 'Actor',
    rating: 4,
    para: 'The bread is soft, fluffy, and stays fresh for days. It’s perfect for sandwiches or just toasting with butter.',
    image: Person3
  },
  {
    id: 4,
    name: 'Mechel Smith',
    profession: 'Cook',
    rating: 5,
    para: 'This fish is fresh, clean, and cooks beautifully. No strong smell, just pure, delicious taste.',
    image: Person4
  },
  {
    id: 5,
    name: 'Anabela Merth',
    profession: 'Actress',
    rating: 3,
    para: 'The spices are fragrant and full of flavor. Just a pinch transforms the taste of any dish.',
    image: Person5
  }

]
