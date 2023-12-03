import React from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const images = [hero1, hero2, hero3, hero4]


const Hero = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-24 items-center'>
            <div className='max-w-2xl font bold -tracking-tighter bold text-4xl text-red-600 sm:6xl leading-tight'>We are changing the lifestyle of yours</div>
            <p className='mt-8 max-w-full text-lg '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quisquam cupiditate assumenda? Atque ex ea quasi minus temporibus facilis natus!</p>
            <Link to='/products' className='btn btn-primary hover:bg-green-300 '>Our Prouducts</Link>
            <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral '>
                {images.map((pic) => {
                    return <div key={pic} className='carousel-item'>
                        <img src={pic} className='rounded-box' />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Hero