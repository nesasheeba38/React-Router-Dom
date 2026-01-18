import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Products = () => {
  const {category}=useParams();
  const [searchParams,setSearchParams]=useSearchParams()

  const brand=searchParams.get("brand");
  const price=searchParams.get("price")
  return (
    <div>
      <h1>Products </h1>
      <p>Products Name:{category}</p>
      <p>Brand Name:{brand}</p>
      <p>Products Price:{price}</p>
      <button onClick={()=>setSearchParams({category:"Washing_Machine",brand:"LG",price:30000})}>Update Products</button>
    </div>
  )
}

export default Products
