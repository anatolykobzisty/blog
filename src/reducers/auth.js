import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/actionTypes';

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
