import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
// import Axios from 'axios';
import SignUp from './components/SignUp';
import NewRecipes from './components/NewRecipes';
import SavedRecipes from './components/SavedRecipes';
import ViewRecipe from './components/ViewRecipe';
// import './App.css';

function App() {
  // const [formData, setFormData] = useState([]);

  // useEffect(() => {
  //   Axios.get('https://secret-recipes-app.herokuapp.com/api/recipes')
  //     .then(res => {
  //       console.log('from saved recipes', res);
  //       setFormData(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })

  // }, []);
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
      {/* <Route path='/viewrecipe'>
        <ViewRecipe title={formData.title} category={formData.category} ingredients={formData.ingredients} directions={formData.instructions} image={formData.img_url} />
      </Route> */}
    </div>
  );
}

export default App;