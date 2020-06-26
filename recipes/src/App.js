import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import NewRecipes from './components/NewRecipes';
import SavedRecipes from './components/SavedRecipes';
import ViewRecipe from './components/ViewRecipe';


function App() {

  return (
    <div>
      <Route exact path='/'>
        <p>Is this where the homepage goes?</p>
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