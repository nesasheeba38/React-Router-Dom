import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import Products from './Products'

const ProductsNavigationPage = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<ProductDetails/>}/>
    <Route path='/products/:category' element={<Products/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default ProductsNavigationPage
