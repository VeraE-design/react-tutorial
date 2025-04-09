import React, { Children } from 'react'
const Product = ({image, price, title, children}) => {
    return (
        <div>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{price}</p>
            {children}
        </div>
    )
}

const PropChildren = () => {
  return (
    <div>
      <h1>List of available products</h1>
      <div className="flex gap-3">
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/3088932/1.jpg?3620"
          }
          price={8000}
          title={"Phone"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/9107893/1.jpg?0142"
          }
          price={12000}
          title={"SilverCrest Blender"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/7595563/1.jpg?1325"
          }
          price={5000}
          title={"powerbank"}
        >
          <p className='text-red-600'>black friday sales</p>
        </Product>
      </div>
    </div>
  );
}


export default PropChildren