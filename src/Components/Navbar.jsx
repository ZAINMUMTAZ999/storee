import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaCartPlus } from "react-icons/fa6";
import Navlinks from './Navlinks';
import { RiSunFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
import { useSelector } from 'react-redux';



const Navbar = () => {
    const getstorage = () => {
        return localStorage.getItem('theme' || coffee)
    }
    const modes = {
        coffee: 'coffee',
        retro: 'retro'
    }
    const [theme, setTheme] = useState(getstorage())
    const handleTheme = () => {
        const { coffee, retro } = modes
        const newTheme = theme === retro ? coffee : retro
        setTheme(newTheme)
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)

    }, [theme])

    const {numInCartItem} = useSelector((store) => store.cart)
    console.log(numInCartItem)

    return (
        <nav className='bg-base-200'>
            <div className="navbar align-element ">

                <div className='navbar-start'>
                    <NavLink to='/' className='hidden lg:flex btn btn-primary hover:btn-ghost text-3xl items-center'>C

                    </NavLink>
                    {/* Navlinks */}
                    <div className='dropdown '>
                        <label tabIndex={0} className=' btn btn-ghost lg:hidden'>
                            <FaBars className='h-6 w-6' />
                        </label>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200
            gap-y-4
            rounded-box 
            '>
                            <Navlinks />

                        </ul>

                    </div>
                </div>
                <div className='navbar-center hidden lg:flex '>
                    <ul className='menu menu-horizontal   gap-x-4  '><Navlinks /></ul>

                </div>
                <div className='navbar-end mb-1'>
                    {/* Theme */}
                    <label className='swap swap-rotate'>
                        <input type="checkbox" onChange={handleTheme} />
                        {/* Sun */}
                        <RiSunFill className='swap-on' />
                        {/* Moon */}
                        <FaMoon className='swap-off' />
                    </label>

                    {/* Cart */}
                    <NavLink to='/cart'>
                        <div className="indicator">
                            <span className='badge badge-sm badge-primary indicator-item '>
                                {numInCartItem}
                            </span>
                            <FaCartPlus className='text-3xl  h- w-6 ml-8' />
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar