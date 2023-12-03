import React from 'react'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { CiGrid2H, CiBoxList } from "react-icons/ci";


const ProductsContainer = () => {
  const { meta } = useLoaderData()
  const totalProducts = meta.pagination.total
  // console.log(totals)
  const [layout, setLayout] = useState('grid')

  const setActiveStyles = (pattern) => {

    return `text-lg btn btn-circle btn-sm`

  }


  return (
    <>
      {/* HEADERS */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h2 className='text-md '>

          {totalProducts} Product{totalProducts > 1 && 's'}
        </h2>

      </div>
      <button className={setActiveStyles('grid')} onClick={() => setLayout('grid')}><CiGrid2H /></button>
      <button className={setActiveStyles('list')} onClick={() => setLayout('list')}><CiBoxList /></button>
      {
        totalProducts === 0 ?
        <h5 className="text-2xl mt-16">
        Sorry, no products matched your search...
      </h5>
          :

          layout === 'grid' ?

            <ProductsGrid />
            :



            <ProductsList />
      }

    </>
  )
}

export default ProductsContainer