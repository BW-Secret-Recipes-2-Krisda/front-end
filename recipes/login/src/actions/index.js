import { axiosAuth } from '../auth/axiosAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  axiosAuth()
    .post('', credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', res.data.id)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.id })
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