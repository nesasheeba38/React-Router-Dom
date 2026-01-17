import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate()
  
  const handleClick=()=>{
    navigate('/')
  }
  return (
    <div>
      <h2>This is About Page</h2>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default About;
