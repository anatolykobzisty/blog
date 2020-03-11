import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  article: {},
  loading: false,
  error: null,
};

const singleArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
        article: {},
      };
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
        loading: false,
      };
    case GET_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default singleArticleReducer;
