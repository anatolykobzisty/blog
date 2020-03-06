import { combineReducers } from 'redux';
import authReducer from './auth';
import multipleArticlesReducer from './multipleArticles';

export default combineReducers({
  auth: authReducer,
  multipleArticles: multipleArticlesReducer,
});
