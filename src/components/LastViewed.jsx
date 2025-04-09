import React from "react";
import MyStoreSingleProducts from "./MyStoreSingleProducts";

const LastViewed = () => {
  const Products = [
    {
      id: 1,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/4300063/1.jpg?2631",
      title: "Pancake Mould",
      price: 3000,
    },
    {
      id: 2,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/5300063/1.jpg?2628",
      title: "Ace Powerbank",
      price: 4500,
    },
    {
      id: 3,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/0227622/1.jpg?7263",
      title: "Egg mould",
      price: 1200,
    },
  ];
  //hello
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="bg-blue-700 text-3xl font-bold p-3 rounded-t-2xl text-white">

      <h1>Last Viewed Products</h1>
      </div>
      <section className="flex gap-2 items-center">
        {
            Products.map((product) => {
                return <MyStoreSingleProducts key={product.id} {...product}/>

            })
        }
      </section>
    </div>
  );
};

export default LastViewed;
