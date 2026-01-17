import React from 'react'
import { Routes,Route, MemoryRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'

const Navigation = () => {
  return (
   <MemoryRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </MemoryRouter>

  )
}

export default Navigation
