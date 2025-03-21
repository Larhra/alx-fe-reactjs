import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="container mx-auto p-6 max-w-3xl shadow">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <ol className="list-decimal pl-5">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-700 mb-2">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default RecipeDetail;