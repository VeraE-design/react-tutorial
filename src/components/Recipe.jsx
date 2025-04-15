import React from "react";
import { SyncLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";

const Recipe = () => {
  const {
    data: { recipes },
    isLoading,
  } = useFetch("https://dummyjson.com/recipes");

  // const [recipes, setRecipes] = useState([])
  // const [isLoading, setIsLoading] =useState(true)

  // useEffect(() => {
  //     const getRecipes = async () => {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setIsLoading(false);
  //       setRecipes(data.recipes);

  //     };
  //     getRecipes();
  //   }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <SyncLoader color="#ff0000" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-bold text-2xl my-2">Prepare your Favourite meals</h1>
      <section>
        {recipes.map((recipe) => {
          const {
            id,
            name,
            image,
            ingredients,
            instructions,
            prepTimeMinutes,
            mealType,
          } = recipe;
          return (
            <div className="my-3.5" key={id}>
              <h1 className="font-medium">Name: {name}</h1>
              <img className="" src={image} alt={name} />
              <p>Prepation Time: {prepTimeMinutes} minutes</p>
              <div>
                <h1 className="font-bold text-2xl my-2">Ingredients</h1>
                <ol className="list-decimal">
                  {ingredients.map((ing, i) => {
                    return <li key={i}>{ing}</li>;
                  })}
                </ol>
                <h1 className="font-bold text-2xl my-2">How To prepare</h1>
                <ol className="list-decimal">
                  {instructions.map((ing, i) => {
                    return <li key={i}>{ing}</li>;
                  })}
                </ol>
                <h1>Meal Type</h1>
                {mealType.map((meal, i) => {
                  return <li key={i}>{meal}</li>;
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Recipe;
