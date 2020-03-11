import { combineReducers } from 'redux';
import authReducer from './auth';
import multipleArticlesReducer from './multipleArticles';
import singleArticleReducer from './singleArticle';

export default combineReducers({
  auth: authReducer,
  multipleArticles: multipleArticlesReducer,
  singleArticle: singleArticleReducer,
});
