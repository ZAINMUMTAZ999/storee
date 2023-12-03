import React from 'react'
import { About, Cart, CheckOut, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './Pages'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorElement } from './Components/index'
//loaders
import { loader as LandingLoader } from './Pages/Landing'
import { loader as SingleProductLoader } from './Pages/SingleProduct'
import { loader as  ProductsLaoder} from './Pages/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductsLaoder
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'checkout',
        element: <CheckOut />
      },
    ]

  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
  },
])
const App = () => {

  return (
    <>
      <RouterProvider router={router} />



    </>
  )
}

export default App