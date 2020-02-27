import axios from 'axios';
import { REGISTER_SUCCESS } from './actionTypes';

export const registerSuccess = token => {
  return {
    type: REGISTER_SUCCESS,
    token,
  };
};

export const register = ({ username, email, password }, setErrors) => async dispatch => {
  // dispatch(registerRequest());
  const registerData = {
    user: {
      username,
      email,
      password,
    },
  };
  try {
    const response = await axios.post(
      'https://conduit.productionready.io/api/users/',
      registerData
    );
    const user = await response.data.user;
    const token = await user.token;
    localStorage.setItem('token', token);
    dispatch(registerSuccess(token));
  } catch (error) {
    setErrors({ ...error.response.data.errors });
    // dispatch(registerFailure());
  }
};
