import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  filteredRecipes: [],
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  /* Existing actions */
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setSearchTerm: (term) =>
    set({ searchTerm: term }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  /* ✅ FAVORITES */
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  /* ✅ RECOMMENDATIONS (mock logic) */
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && Math.random() > 0.5
    );

    set({ recommendations: recommended });
  },
}));
