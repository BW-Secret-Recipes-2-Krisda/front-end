import axios from 'axios';

export const SEARCH_STARTED = "SEARCH_STARTED";

export const search = param => dispatch => {
  dispatch({type:SEARCH_STARTED, payload: param})
}

export const FETCH_RECIPES_START = 'FETCH_RECIPES_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

export const getRecipes = () => dispatch => {
  dispatch({ type: FETCH_RECIPES_START });
  axios
    .get('https://secret-recipes-app.herokuapp.com/api/recipes', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({type:FETCH_RECIPES_FAILURE, payload:err}));
};

export const SELECT_RECIPE_START = "SELECT_RECIPE_START";
export const SELECT_RECIPE_SUCCESS = "SELECT_RECIPE_SUCCESS";
export const SELECT_RECIPE_FAILURE = "SELECT_RECIPE_FAILURE";

export const selectRecipe = recipe => dispatch => {
  dispatch({type:SELECT_RECIPE_START,payload: recipe})
  console.log("RECIPE:", recipe)
};