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
      const user = await response.data.user;
      console.log(user);
      dispatch(autoLoginSuccess(user));
    } catch (error) {
      // const { errors } = error.response.data;
      dispatch(autoLoginFailure());
    }
  }
};
