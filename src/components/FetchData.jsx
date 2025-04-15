import React from "react";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
const url = "https://dummyjson.com/products";

const FetchData = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products);
      setIsLoading(false);
      setProducts(data.products);
    };
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <BounceLoader color="#ff0000" />;
      </div>
    );
  }

  return (
    <div>
      <h1>List Of Products</h1>
      <section className="flex items-center gap-2.5 flex-wrap">
        {products.map((product) => {
          const {
            id,
            title,
            price,
            images,
            stock,
            warrantyInformation,
            rating,
          } = product;
          return (
            <div key={id} className="w-full max-w-[320px] h-[370px] shadow-md ">
              <img
                src={images[0]}
                alt={title}
                className="w-full object-cover h-[60%]"
              />
              <p className="text-lg">{title}</p>
              <div className="flex gap-3 items-center">
                <p className="text-2xl font-bold">${price}</p>
                <p className={stock >= 30 ? "text-green-500" : "text-red-500"}>
                  {stock} in stock
                </p>
              </div>
              <p>{warrantyInformation}</p>
              <p className={rating >= 3.5 ? "text-green-500" : "text-red-500"}>
                {rating}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchData;
