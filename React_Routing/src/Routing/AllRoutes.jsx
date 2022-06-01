import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllProducts from '../Components/AllProducts'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import ProductDetails from '../Components/ProductDetails'


const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/products'} element={<AllProducts/>}></Route>
          <Route path={'/products/:id'} element={<ProductDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
