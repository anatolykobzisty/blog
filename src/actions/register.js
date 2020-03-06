import { message } from 'antd';
import axios from '../axios';

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './actionTypes';

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = user => {
  return {
    type: REGISTER_SUCCESS,
    user,
  };
};

export const registerFailure = (error = null) => {
  return {
    type: REGISTER_FAILURE,
    error,
  };
};

export const register = ({ username, email, password }) => async dispatch => {
  dispatch(registerRequest());
  const registerData = {
    user: {
      username,
      email,
      password,
    },
  };
  if (navigator.onLine) {
    try {
      const response = await axios.post('/users/', registerData);
      if (response.status === 200) {
        const user = await response.data.user;
        const token = await user.token;
        localStorage.setItem('token', token);
        dispatch(registerSuccess(user));
      }
    } catch (error) {
      if (error.response.status === 404) {
        dispatch(registerFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(registerFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(registerFailure());
        message.error('Unauthorized requests');
      } else if (error.response.status === 422) {
        dispatch(registerFailure(error.response.data));
      } else {
        dispatch(registerFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(registerFailure());
    message.error('Please check your network connectivity');
  }
};
