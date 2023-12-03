import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import { FormInput } from '../Components'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormcheckBox from './FormcheckBox'


const Filters = () => {
  const {meta,params}=useLoaderData()
  const  {search,company,category,shipping,order,price}= params
  return (
    < Form className="grid gap-y-4 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 px-4 bg-base-300 rounded-md items-center" >
    {/* SEARCH */}
    < FormInput label='Search Product' name='search' type='search' size='input-sm' defaultValue={search} />
    {/* company */}
    < FormSelect label='Select company' name='company' list={meta.companies} size='select-sm' defaultValue={company} />
    {/* catogories */}
    < FormSelect label='Select catogory' name='catogory' list={meta.categories} size='select-sm' defaultValue={category} />
    {/* order */}
    < FormSelect label='Select by Order' name='order' list={['a-z','z-a','high','low']} size='select-sm' defaultValue={order}/>
    {/*   Price */}
    <FormRange name='price' label='select-price' price ={price} />
    <FormcheckBox label='free shipping' name='Shipping' size='checkbox-sm' defaultValue={shipping} />
    {/* BUTTONS */}
    <button button className='btn btn-primary' > Search</button>
    <Link to='/products' className='btn btn-accent'>Reset</Link>
  </Form >
  )
}

export default Filters