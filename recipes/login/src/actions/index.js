//import axios from 'axios';
import { axiosAuth } from '../auth/axiosAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//export const login = credentials => dispatch => {
  
//  dispatch({ type: LOGIN_START });
//  axios
//    .post(
//      'https:secret-recipes-app.herokuapp.com/api/auth/login',
//      credentials
//    )
//    .then(res => {
//      console.log(res.data)
//      localStorage.setItem('token', res.data.authToken);
//      localStorage.setItem("id", res.data.user.id);
//      dispatch({ type: LOGIN_SUCCESS, payload: res.data});
//      return true;
//    })
//    .catch(err => {dispatch({type:LOGIN_FAILURE, payload:err})
//  console.log(localStorage.token)});
//};

//export const LOGOUT = 'LOGOUT';

//export const logout = () => dispatch => {
//  dispatch({ type: LOGOUT });
//  localStorage.clear();
//};

const headers = {
  'Content-Type' : 'application/json',
  'Accept' : 'application/json',
  'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6InVzZXI0IiwiaWF0IjoxNTkyNTc5MDUwLCJleHAiOjE1OTI1ODYyNTB9.ly2pBBz1_7rRma4DDwA6ucq5Cyx-v-IuIVo2AXO8HsM'
}
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  axiosAuth()
    .post('', credentials, { headers: headers })
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', res.data.username)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      localStorage.removeItem('token')
      dispatch({ type: LOGIN_FAILURE, payload: err.data })
    })
};

export const LOGOUT = 'LOGOUT';

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
};