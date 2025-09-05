import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList';
import Cards from '../Cards/Cards'

const CategoryPage = ({title, bgImage, categories=[]}) => {

    let filteredItems = categories.includes('All') ? ProductList 
    : ProductList.filter(item => categories.includes(item.category))

    const renderProduct = filteredItems.map( product => {
        return (
            <Cards name={product.name} image={product.image} price={product.price} key={product.id} /> 
        )
    }

    )

  return (
    <div>
        <Banner title={title} bgImage={bgImage}/>
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-10 py-20 '>
            {renderProduct}
        </div>
    </div>
  )
}

export default CategoryPage
