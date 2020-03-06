import { message } from 'antd';
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

export const loginFailure = (error = null) => {
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
  if (navigator.onLine) {
    try {
      const response = await axios.post('/users/login/', loginData);
      if (response.status === 200) {
        const user = await response.data.user;
        const token = await user.token;
        localStorage.setItem('token', token);
        dispatch(loginSuccess(user));
      }
    } catch (error) {
      if (error.response.status === 404) {
        dispatch(loginFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(loginFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(loginFailure());
        message.error('Unauthorized requests');
      } else if (error.response.status === 422) {
        dispatch(loginFailure(error.response.data));
      } else {
        dispatch(loginFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(loginFailure());
    message.error('Please check your network connectivity');
  }
};
