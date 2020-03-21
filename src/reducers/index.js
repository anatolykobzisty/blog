import { combineReducers } from 'redux';
import userReducer from './user';
import multipleArticlesReducer from './multipleArticles';
import singleArticleReducer from './singleArticle';

export default combineReducers({
  user: userReducer,
  multipleArticles: multipleArticlesReducer,
  singleArticle: singleArticleReducer,
});
