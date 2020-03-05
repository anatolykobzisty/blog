import axios from '../axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

export const login = ({ email, password }) => async dispatch => {
  dispatch(loginRequest());
  const loginData = {
    user: {
      email,
      password,
    },
  };
  try {
    const response = await axios.post('/users/login/', loginData);
    const user = await response.data.user;
    const token = await user.token;
    localStorage.setItem('token', token);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};
