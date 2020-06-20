import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './SignUp';
import NewRecipes from './NewRecipes';
// import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/'>

      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/newrecipeform'>
        <NewRecipes />
      </Route>
    </div>
  );
}

export default App;
