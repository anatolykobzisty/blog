import axios from '../axios';
import { LOGOUT_USER } from './actionTypes';

const logout = () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common.Authorization;
  return {
    type: LOGOUT_USER,
  };
};

export default logout;
