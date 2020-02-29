import axios from '../axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    token,
  };
};

export const loginFailure = errors => {
  return {
    type: LOGIN_FAILURE,
    errors,
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
    dispatch(loginSuccess(token));
  } catch (error) {
    const { errors } = error.response.data;
    dispatch(loginFailure(errors));
  }
};
