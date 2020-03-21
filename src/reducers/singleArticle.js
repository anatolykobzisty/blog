import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILURE,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  HANDLE_LIKE_ARTICLE,
  CLEAN_ARTICLE,
} from '../actions/actionTypes';

const initialState = {
  article: {},
  loading: false,
};

const singleArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
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
      };
    case DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: {},
        loading: false,
      };
    case DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case HANDLE_LIKE_ARTICLE:
      return {
        ...state,
        article: action.article,
      };
    case CLEAN_ARTICLE:
      return {
        ...state,
        article: {},
      };
    default:
      return state;
  }
};

export default singleArticleReducer;
