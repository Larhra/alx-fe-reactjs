import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border-b">
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500">
              View Recipe
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;