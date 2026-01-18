import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const products=[
    {category:"Mobile",brand:"samsung",price:12000},
    {category:"Laptop",brand:"lenova",price:49000},
    {category:"Tv",brand:"sony",price:80000}
    ];
    const navigate=useNavigate()
   
  return (
    <div>
      <h1>Products List:</h1>
    {products.map((products)=>{
      return(
        <button key={products.category} onClick={()=>navigate(`products/${products.category}?brand=${products.brand}&price=${products.price}`)}>{products.category}</button>
      )
    })}
    </div>
    
  )
}

export default ProductDetails
