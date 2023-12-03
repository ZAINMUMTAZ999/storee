import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header,Loading,Navbar } from '../Components'

Header
const HomeLayout = () => {
  const navigation = useNavigation()
  const pageLoading = navigation.state==='loading'

  return (
    <>
    <Header/>
    <Navbar/>
    {pageLoading? <Loading/>: 
    
    <section className='align-element py-20'>

    <Outlet />
    </section>
    }
    </>
  )
}

export default HomeLayout