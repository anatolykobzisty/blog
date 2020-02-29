import axios from '../axios';

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './actionTypes';

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = token => {
  return {
    type: REGISTER_SUCCESS,
    token,
  };
};

export const registerFailure = errors => {
  return {
    type: REGISTER_FAILURE,
    errors,
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
  try {
    const response = await axios.post('/users/', registerData);
    const user = await response.data.user;
    const token = await user.token;
    localStorage.setItem('token', token);
    dispatch(registerSuccess(token));
  } catch (error) {
    const { errors } = error.response.data;
    dispatch(registerFailure(errors));
  }
};