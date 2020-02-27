import axios from 'axios';
import { LOGIN_SUCCESS } from './actionTypes';

export const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const login = ({ email, password }, setErrors) => async dispatch => {
  // dispatch(registerRequest());
  const loginData = {
    user: {
      email,
      password,
    },
  };
  try {
    const response = await axios.post(
      'https://conduit.productionready.io/api/users/login/',
      loginData
    );
    const user = await response.data.user;
    const token = await user.token;
    localStorage.setItem('token', token);
    dispatch(loginSuccess(token));
  } catch (error) {
    setErrors({ ...error.response.data.errors });
    // dispatch(registerFailure());
  }
};
