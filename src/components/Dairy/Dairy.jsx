import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgDairy from '../../assets/dairy.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy Products" bgImage={BgDairy} categories="Dairy"/>
    </div>
  )
}

export default Dairy
