import React from 'react'
import ProductsGrid from './ProductsGrid'
import SectionTitle from './SectionTitle'

const FeaturedProducts = () => {
  return (
    <>
      <SectionTitle text='featured Products' />
      <hr className='m-6' />
      <ProductsGrid />
    </>
  )
}

export default FeaturedProducts