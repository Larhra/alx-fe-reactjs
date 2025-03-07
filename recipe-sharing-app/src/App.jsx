import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import AddRecipeForm from "./components/AddRecipeForm"
import RecommendationsList from "./components/RecommendationsList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <div className="p-6">
        <nav className="mb-6">
          <Link to="/" className="mr-4 text-blue-500">All Recipes</Link>
          <Link to="/favorites" className="mr-4 text-blue-500">Favorites</Link>
          <Link to="/recommendations" className="text-blue-500">Recommendations</Link>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path= "addrecipeform" element= {<AddRecipeForm/>}/>
          <Route path= "RecipeDetails" element= {<RecipeDetails/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;