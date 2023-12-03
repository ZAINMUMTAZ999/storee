import { useState } from 'react'
import { customFetch, dollarAmount, generateAmountOptions } from '../utils'
import { useLoaderData, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)

  return { product: response.data.data }
}
const SingleProduct = () => {

  const { product } = useLoaderData()
  const { title, colors, company, image, description, price, category } = product.attributes
  const dollaramount = dollarAmount(price)
  // console.log(product)
  const [productcolor, setProductcolor] = useState(colors[0])
  const [amount, setAmount] = useState(1)
  const handleAmount = () => {
    setAmount(amount)
  }
  const cartProduct = {
    cartID: product.id + productcolor,
    ProductID: product.id,
    image, title, price, company, productcolor

  }
  //Dispatch
  const dispatch = useDispatch()
  const addTocart = () => {
    dispatch(addItem({ product: cartProduct }))
  }
  return (
    <>
      <div className='breadcrumbs text-md mt-4'>

        <ul >

          <li><Link to='/' >Home</Link></li>
          <li><Link to='/products'  >Products</Link></li>

        </ul>
      </div>
      <div className='grid lg:grid-cols-2 mt-3'>
        <img src={image} alt={company} className='w-96 h-96 object-cover rounded-lg' />

      </div>
      <div className='text-bold mt-12 font-bold text-4xl underline'>
        <h1 >{title}</h1>

      </div>
      <p className='text-2xl font-bold '>{company}</p>
      <p className='w-4' >{dollaramount}</p>
      <p className='leading-8'>{description}</p>

      {/* Colors */}
      <div>
        <div className="mt-2 text-3xl font-bold">Colors</div>
        {colors.map((color) => {
          return (

            <button
              key={color}
              className={`badge w-6 h-6 mr-2 ${color === productcolor && 'border-2 border-secondary'}`}
              style={{ backgroundColor: color }}
              onClick={() => setProductcolor(color)}
            ></button>

          )
        })}
      </div>

      {/* Amount */}
      <div className='form-control w-full max-w-xs '>
        <label htmlFor="amount">
          <h4 className='text-md font-md capitalize'>
            amount
          </h4>
        </label>
        <select className='select select-secondary select-bordered select-md' id="amount" value={amount} onChange={handleAmount}>
          {generateAmountOptions(12)}

        </select>

      </div>
      {/* Bag */}
      <button className='mt-2 ml-2 btn btn-secondary hover:btn-ghost ' onClick={addTocart}>
        Add to Bag
      </button>
    </>
  )
}

export default SingleProduct