import React, {useState} from 'react';
//import logo from './logo.svg';
import logo from './plate.jpg';
import './App.css';
import RecipeTable from './components/RecipeTable';
import NewRecipeForm from './components/NewRecipeForm';

function App() {

  const [recipeData, setRecipeData] = useState([
    {
      rowNumber: 1,
      name: 'Spaghetti Carbonara De Luxe',
      ingredients: 'Spaghetti, Eggs, Parmesan, Pancetta, Pepper',
      instructions: 'Cook spaghetti. Fry pancetta. Mix eggs and cheese. Combine all.'
    },
    {
      rowNumber: 2,
      name: 'Chicken Curry',
      ingredients: 'Chicken, Curry Powder, Coconut Milk, Onion, Garlic',
      instructions: 'Sauté onion and garlic. Add chicken and curry powder. Stir in coconut milk.'
    },
    {
      rowNumber: 3,
      name: 'Vegetable Stir Fry',
      ingredients: 'Broccoli, Carrots, Bell Peppers, Soy Sauce, Ginger',
      instructions: 'Chop vegetables. Stir fry with ginger and soy sauce.'
    },
    {
      rowNumber: 4,
      name: 'Beef Tacos',
      ingredients: 'Ground Beef, Taco Shells, Lettuce, Tomato, Cheese',
      instructions: 'Cook beef. Fill taco shells with beef and toppings.'
    },
    {
      rowNumber: 5,
      name: 'Caesar Salad',
      ingredients: 'Romaine Lettuce, Croutons, Caesar Dressing, Parmesan',
      instructions: 'Toss lettuce with dressing. Add croutons and cheese.'
    }
  ]);

  const addNewRecipe = () => {
    const newRecipe = {
      rowNumber: recipeData.length + 1,
      name: 'New Recipe',
      ingredients: 'New Ingredients',
      instructions: 'New Instructions'
    };
    setRecipeData(recipeData => [...recipeData, newRecipe]);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Recipes
        </div>
        <div className='card-body'>
          <RecipeTable recipes={recipeData} />
          <button className='btn btn-primary' onClick={addNewRecipe}>
            Add New Recipe
          </button>
          <NewRecipeForm />
        </div>
      </div>
    </div>
  );
}

export default App;
