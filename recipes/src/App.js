import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import NewRecipes from './components/NewRecipes';
import SavedRecipes from './components/SavedRecipes';
import ViewRecipe from './components/ViewRecipe';
// import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/'>
        <p>It works</p>
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/newrecipeform'>
        <NewRecipes />
      </Route>
      <Route path='/savedrecipes'>
        <SavedRecipes />
      </Route>
      <Route path='/viewrecipe'>
        <ViewRecipe />
      </Route>
    </div>
  );
}

export default App;