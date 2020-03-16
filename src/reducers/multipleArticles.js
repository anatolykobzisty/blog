import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  HANDLE_LIKE_ARTICLE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  articles: [],
  articlesCount: null,
  loading: false,
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
    case HANDLE_LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
        articles: state.articles.map(article =>
          article.slug === action.article.slug ? action.article : article
        ),
        loadingAddToFavorites: false,
      };
    default:
      return state;
  }
};

export default multipleArticlesReducer;
