import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  articles: [],
  articlesCount: null,
  loading: false,
  error: null,
};

const multipleArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        articlesCount: action.articlesCount,
        loading: false,
      };
    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default multipleArticlesReducer;
