import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  // console.log(error)
  if (error.status === 404) {
    return (
      <main className='grid place-items-center min-h-full mt-32'>
        <h1 className='text-9xl items-center  text-secondary font-extrabold'>404</h1>

        <span className='items-center'>

          <h2 className='text-4xl mt-2'>We not found your page...</h2>
          <h3 className='text-lg mt-2  ml-32'>Sorry Page not found</h3>
        </span>
        <div className='mt-4'>
          <Link to='/' className='btn btn-secondary hover:btn btn-primary '>Go_to_Home</Link>
        </div>
      </main>
    )
  }
  return (
    <>
      <h1 className='grid place-items-center text-4xl font-bold text-secondary mt-32 '>there was an error...</h1>
    </>
  )
}

export default Error