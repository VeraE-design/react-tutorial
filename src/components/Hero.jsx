import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { ReactTyped } from "react-typed";


const Hero = () => {
  const { value1 } = useAppContext()
  return (
    <div className="hero bg-black text-white h-screen max-h-[600px]">
      <div className="container h-full flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-[600px]">
          <h1 className="text-2xl md:text-4xl">
            Buy a{" "}
            <ReactTyped
            typeSpeed={80}
            backSpeed={90}
            strings={["Car", "Jet", "Bus"]}
            loop
            />
          </h1>
          <p className="my-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur vitae a non obcaecati recusandae. Nulla aliquam
            molestias corrupti nobis, iste ad. Veniam perferendis a optio ipsum
            fuga unde est repellendus.
          </p>
          <button className="bg-white text-black rounded-sm h-[40px] w-[120px] cursor-pointer">
            Shop Now
          </button>
        </div>
        <img
          src="https://media.istockphoto.com/id/184280978/photo/red-luxury-car-on-angle-parked-on-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=m7_kyf9-ULhztvPDHVq0uwbudaNqyNyq5blM8YrHJtY="
          alt="exotic cars"
          className="rounded-md w-[350px]"
        />
      </div>
    </div>
  );
};

export default Hero;
