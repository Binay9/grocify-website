import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeafood from '../../assets/meat&fish.jpg'

const Seafood = () => {
  return (
    <div>
      <CategoryPage title="Meat & Sea Food" bgImage={BgSeafood} categories="SeaFood"/>
    </div>
  )
}

export default Seafood
