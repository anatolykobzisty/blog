import { message } from 'antd';
import axios from '../axios';

import { AUTO_LOGIN_REQUEST, AUTO_LOGIN_SUCCESS, AUTO_LOGIN_FAILURE } from './actionTypes';

export const autoLoginRequest = () => {
  return {
    type: AUTO_LOGIN_REQUEST,
  };
};

export const autoLoginSuccess = user => {
  return {
    type: AUTO_LOGIN_SUCCESS,
    user,
  };
};

export const autoLoginFailure = () => {
  return {
    type: AUTO_LOGIN_FAILURE,
  };
};

export const autoLogin = () => async dispatch => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(autoLoginRequest());
    axios.defaults.headers.common.Authorization = `Token ${token}`;
    try {
      const response = await axios('/user/');
      if (response.status === 200) {
        const user = await response.data.user;
        dispatch(autoLoginSuccess(user));
        console.log(user);
      }
    } catch (error) {
      if (error.response.status === 404) {
        dispatch(autoLoginFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(autoLoginFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(autoLoginFailure());
        message.error('Unauthorized requests');
      } else {
        dispatch(autoLoginFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(autoLoginFailure());
  }
};
