import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../Components'


const Register = () => {
  return (
    <section className='card grid place-items-center h-screen mt-10 '>
      <Form method="post" >
        <h1 className='grid place-items-center  text-secondary text-5xl font-extrabold'>Register</h1>


        <FormInput label='Username' type='text' name='username' />
        <FormInput label='email' type='email' name='identifier' />
        <FormInput label='password' type='password' name='password' />
        <div className='mt-2'>

          <SubmitBtn text='Regsiter' />
        </div>
<div className='text-center'>

        <p >Not a Member??</p> <Link to='/login' className='text-secondary  '>Login</Link>
</div>
      </Form>
    </section>
  )
}

export default Register