import { LOGOUT_SUCCESS } from './actionTypes';

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(logoutSuccess());
};
