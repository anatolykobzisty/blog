import axios from '../axios';
import { LOGOUT } from './actionTypes';

const logout = () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common.Authorization;
  return {
    type: LOGOUT,
  };
};

export default logout;
