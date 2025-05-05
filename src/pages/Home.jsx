import React from "react";
import Hero from "../components/Hero";
import Recipe from "../components/Recipe";
import SimpleRef from "../components/SimpleRef";

const Home = () => {
  return (
    <div>
      <SimpleRef />
      <Hero />
      <Recipe />
    </div>
  );
};

export default Home;
