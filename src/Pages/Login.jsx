import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../Components'


const Login = () => {
  return (
    <section className='card grid place-items-center h-screen mt-10 '>
      <Form method="post" >
        <h1 className='grid place-items-center  text-secondary text-5xl font-extrabold'>Login</h1>


        <FormInput label='email' type='email' name='identifier' defaultValue='username@gamil.com' />
        <FormInput label='password' type='password' name='password' defaultValue='secret' />
        <div className='mt-2'>

        <SubmitBtn text='login'  />
        </div>
        <div className='mt-2 items-center'>
          <button className='btn btn-secondary  hover:btn-ghost'>
            Guest User
          </button>
      
        </div>
        <div className='text-center'>

        <p>Not a member yet??</p> <Link to='/register' className='text-secondary'>Go to Register/MemberShip</Link>
        </div>
      </Form>
    </section>
  )
}

export default Login