import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILURE,
  ADD_ARTICLE_REQUEST,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILURE,
  CLEAN_ARTICLE,
} from '../actions/actionTypes';

const initialState = {
  article: {},
  loading: false,
  isSubmitted: false,
  error: null,
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
        error: action.error,
      };
    case ADD_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
        loading: false,
        isSubmitted: true,
      };
    case ADD_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case EDIT_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
        loading: false,
        isSubmitted: true,
      };
    case EDIT_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CLEAN_ARTICLE:
      return {
        ...state,
        article: {},
        isSubmitted: false,
        error: null,
      };
    default:
      return state;
  }
};

export default singleArticleReducer;
