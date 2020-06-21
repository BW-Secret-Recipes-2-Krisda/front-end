import {
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
  } from "../login";
  
  const initialState = {
    error: null,
    loggingIn: false,
    success: false
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN_START:
        return {
          ...state,
          error: null,
          loggingIn: true,
          success: false
        };
      case LOG_IN_SUCCESS:
        return {
          ...state,
          error: null,
          loggingIn: false,
          success: true
        };
      case LOG_IN_FAILURE:
        return {
          ...state,
          error: action.payload,
          loggingIn: false,
          success: false
        };
      default:
        return state;
    }
  };
  
  export default Reducer;