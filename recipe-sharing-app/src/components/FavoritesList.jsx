import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));
  const toggleFavorite = useRecipeStore(state => state.toggleFavorite);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet!</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => toggleFavorite(recipe.id)}>Remove from Favorites</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;