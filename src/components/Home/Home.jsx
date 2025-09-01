import React from 'react'
import Navbar from "../Navbar/Navbar";
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Value from '../Value/Value';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <Value />
    </div>
  )
}

export default Home
