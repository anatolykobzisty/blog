import { REGISTER_SUCCESS } from '../actions/actionTypes';

const initialState = {
  token: null,
  isSuccessfullSubmit: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
