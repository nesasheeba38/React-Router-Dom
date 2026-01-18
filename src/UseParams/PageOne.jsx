import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PageOne = () => {
    const [name,setName]=useState("")
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`/page-two/${name}`)
    }

  return (
    <div>
      <input type='text' placeholder='Enter Name' value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default PageOne
