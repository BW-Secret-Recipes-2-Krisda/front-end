import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import NewRecipes from './components/NewRecipes';
import SavedRecipes from './components/SavedRecipes';
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
    </div>
  );
}

export default App;