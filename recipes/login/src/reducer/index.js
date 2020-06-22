import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "../actions";
  
const initialState = {
  users: [],
  error: null,
  loggingIn: false,
  success: false,
  token: localStorage.getItem('token')
};
  
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true,
        success: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loggingIn: false,
        success: true,
        token: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
        success: false
      };
    case LOGOUT:
      return{
        ...state,
        token: null
      };
        
    default:
      return state
  }
}
  
export default reducer;