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
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  HANDLE_LIKE_ARTICLE_SUCCESS,
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
        isSubmitted: false,
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
        loading: false,
        isSubmitted: true,
      };
    case EDIT_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
        isSubmitted: true,
        loading: false,
      };
    case DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case HANDLE_LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
      };
    default:
      return state;
  }
};

export default singleArticleReducer;
