import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT_USER,
} from '../actions/actionTypes';

const initialState = {
  currentUser: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        loading: false,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: {},
      };
    default:
      return state;
  }
};

export default userReducer;
