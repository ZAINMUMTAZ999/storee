import { nanoid } from 'nanoid'

import React from 'react'
import { NavLink } from 'react-router-dom'
const links =[
    {id:nanoid(),text:'home',url:'/'},
    {id:nanoid(),text:'products',url:'/products'},
    {id:nanoid(),text:'cart',url:'/cart'},
    {id:nanoid(),text:'about',url:'/about'},
{id:nanoid(),text:'orders',url:'/orders'},
]
const Navlinks = () => {
  return (
    <>
    {links.map((link)=>{
        const {id,text,url}=link
        return (
            <div key={id} className='capitalize hover:bg-gray-500 link-hover '  >
                <NavLink to={url} >{text}</NavLink>
            </div>
        )
    })}
    </>
  )
}

export default Navlinks