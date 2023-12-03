import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' bg-neutral text-neutral-content py-2'>
<div className='align-element flex justify-center sm:justify-end'>
    <div className="flex gap-x-4 justify-center items-center">
        
        <Link to='/login'  className='link link-hover sm:text-sm' >Guest/Login</Link>
        <Link to='/register' className='link link-hover sm:text-sm'>create an account</Link>
    </div>
</div>
    
    </header>
  )
}

export default Header