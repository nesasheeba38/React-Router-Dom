import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/about')
    }
  return (
    <div>
      <h2>This is Home Page</h2>
      <button onClick={handleClick}>Go To About</button>
    </div>
  )
}

export default Home;
