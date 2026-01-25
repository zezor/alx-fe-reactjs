import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <h1>Recipe Sharing App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          }
        />

        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
