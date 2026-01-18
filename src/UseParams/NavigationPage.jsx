import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

const NavigationPage = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<PageOne/>}/>
    <Route path='/page-two/:name' element={<PageTwo/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default NavigationPage
