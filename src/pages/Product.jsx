import React from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const {state} =useLocation()
  console.log('location:', state)
  return (
    <div>Product</div>
  )
}

export default Product