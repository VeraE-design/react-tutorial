import React from 'react'
const SingleProduct = ({image, price, title}) => {
    return <div>
        <img src={image} alt={title} />
        <p className='text-xl font-medium'>{title}</p>
        <p className='text-2xl font-bold'>{price}</p>
    </div>
}

const JumiaClone = () => {
  return (
    <div>
      <h1>All Products</h1>
      <div className="flex gap-3">
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/5518204/1.jpg?1787"
          }
          price={173000}
          title={"Hikers 32 TV"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/0996104/1.jpg?8010"
          }
          price={121000}
          title={"TLC 32"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/0996104/1.jpg?8010"
          }
          price={412000}
          title={"Century 50 Inches"}
        />
      </div>
    </div>
  );
}


export default JumiaClone