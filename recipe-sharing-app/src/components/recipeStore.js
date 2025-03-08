import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: 'Pasta', description: 'Delicious Italian pasta' },
    { id: 2, title: 'Pizza', description: 'Homemade pepperoni pizza' }
  ],

  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...newRecipe, id: state.recipes.length + 1 }],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  setRecipes: (recipes) => set({ recipes }),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
}));

export default useRecipeStore;