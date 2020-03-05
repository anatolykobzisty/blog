import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTO_LOGIN_REQUEST,
  AUTO_LOGIN_SUCCESS,
  AUTO_LOGIN_FAILURE,
  LOGOUT,
} from '../actions/actionTypes';

const initialState = {
  currentUser: {},
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        loading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case AUTO_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTO_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        loading: false,
      };
    case AUTO_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: {},
      };
    default:
      return state;
  }
};

export default authReducer;
