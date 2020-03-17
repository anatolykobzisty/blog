import { message } from 'antd';
import axios from '../axios';

import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from './actionTypes';

export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const getUserSuccess = user => {
  return {
    type: GET_USER_SUCCESS,
    user,
  };
};

export const getUserFailure = () => {
  return {
    type: GET_USER_FAILURE,
  };
};

export const getUser = () => async dispatch => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(getUserRequest());
    axios.defaults.headers.common.Authorization = `Token ${token}`;
    try {
      const response = await axios('/user/');
      if (response.status === 200) {
        const user = await response.data.user;
        dispatch(getUserSuccess(user));
      }
    } catch (error) {
      if (error.response.status === 404) {
        dispatch(getUserFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(getUserFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(getUserFailure());
        message.error('Unauthorized requests');
      } else {
        dispatch(getUserFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(getUserFailure());
  }
};
