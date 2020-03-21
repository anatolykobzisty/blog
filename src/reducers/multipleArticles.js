import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  HANDLE_LIKE_ARTICLE_REQUEST,
  HANDLE_LIKE_ARTICLE_SUCCESS,
  HANDLE_LIKE_ARTICLE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  articles: [],
  articlesCount: null,
  loading: false,
  loadingAddToFavorites: false,
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
      };
    case HANDLE_LIKE_ARTICLE_REQUEST:
      return {
        ...state,
        loadingAddToFavorites: true,
      };
    case HANDLE_LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: state.articles.map(article =>
          article.slug === action.article.slug ? action.article : article
        ),
        loadingAddToFavorites: false,
      };
    case HANDLE_LIKE_ARTICLE_FAILURE:
      return {
        ...state,
        loadingAddToFavorites: false,
      };
    default:
      return state;
  }
};

export default multipleArticlesReducer;
