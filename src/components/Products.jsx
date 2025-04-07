import React from 'react'
import mycar from "../assets/car.jpg";
import carss from "../assets/orange.png"

const Products = () => {
  return (
    <div>
        <img src={mycar} alt="my car" />
        <img src={carss} alt="car" />
    </div>
  )
}

export default Products