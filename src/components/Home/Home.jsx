import React from 'react'
import Navbar from "../Navbar/Navbar";
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Value from '../Value/Value';
import Products from '../Products/Products';
import Discount from '../Discount/Discount';
import Process from '../Process/Process';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <Value />
        <Products />
        <Discount />
        <Process />
    </div>
  )
}

export default Home
