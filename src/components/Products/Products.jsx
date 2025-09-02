import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards';
import Button from '../Button/Button';

const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
    const [activeTab, setActiveTab] = useState('All');

    let filteredProducts = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab)

    const renderCards = filteredProducts.slice(0,8).map(product => {
        return (
                <Cards image={product.image} name={product.name} price={product.price} id={product.id}  />
        )
    })  

  return (
    <section>
        <div className='max-w-[1200px] mx-auto px-10 py-20'>
            <Heading highlight="Our" heading="Products" />

            {/* Tabs */}
            <div className='flex flex-wrap justify-center mt-10 gap-3'>
                {categories.map(category =>{ 
                   return(
                    <button key={category} 
                    className={`px-5 py-1 text-lg rounded-lg cursor-pointer ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'} `} 
                    onClick={()=>setActiveTab(category)}>
                        {category}
                    </button>
                )} 
            )}
            </div>

            {/* Cards */}

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-5 mt-8'>
                {renderCards}
            </div>

            <div className='w-fit mx-auto mt-10'>
                <Button content='See All'/>
            </div>

        </div>
    </section> 
  )
}

export default Products
