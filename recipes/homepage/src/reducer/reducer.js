import {
    FETCH_RECIPES_START,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE,
    SELECT_RECIPE_START,
    SEARCH_STARTED
  } from '../actions';
  
  const initialState = {
    users: [],
    error: '',
    errorStatusCode: null,
    fetchingRecipes: false,
    recipes:[],
    selectedRecipe:null,
    filteredRecipes:[]
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_RECIPES_START:
        return {
          ...state,
          fetchingRecipes:true,
        }
      case FETCH_RECIPES_SUCCESS: 
        return {
          ...state,
          fetchingRecipes:false,
          recipes: action.payload
        }
      case FETCH_RECIPES_FAILURE:
          return {
            ...state,
            fetchingRecipes:false,
            error: action.payload
          }
      
      case SELECT_RECIPE_START:
          return {
            ...state,
            selectedRecipe: action.payload
          }
      
      case SEARCH_STARTED:
        return {
          ...state,
          filteredRecipes: state.recipes.filter( recipe => {
              if(action.payload.length <= 0){
                return false;
              }
              else if (recipe.title.toLowerCase().includes(action.payload.toLowerCase()) || recipe.category.toLowerCase().includes(action.payload.toLowerCase()) ){
                return recipe;
              } else {
                return false;
              }
              }
            )
        }
    
      default:
        return state;
    }
}
  
export default reducer;

   