import React from 'react'
import { HashRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

const Navigation = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </HashRouter>
  )
}

export default Navigation
