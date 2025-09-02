import React from 'react'
import Navbar from "../Navbar/Navbar";
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Value from '../Value/Value';
import Products from '../Products/Products';
import Discount from '../Discount/Discount';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <Value />
        <Products />
        <Discount />
    </div>
  )
}

export default Home
