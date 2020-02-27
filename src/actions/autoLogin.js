import { logout } from './logout';
import { loginSuccess } from './login';

const autoLogin = () => dispatch => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(logout());
  } else {
    dispatch(loginSuccess(token));
  }
};

export default autoLogin;
