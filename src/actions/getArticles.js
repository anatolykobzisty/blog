import { message } from 'antd';
import axios from '../axios';

import showMessageNetError from '../utils/showMessageNetError';

import { GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from './actionTypes';

export const getArticlesRequest = () => {
  return {
    type: GET_ARTICLES_REQUEST,
  };
};

export const getArticlesSuccess = (articles, articlesCount) => {
  return {
    type: GET_ARTICLES_SUCCESS,
    articles,
    articlesCount,
  };
};

export const getArticlesFailure = () => {
  return {
    type: GET_ARTICLES_FAILURE,
  };
};

export const getArticles = (offset = 0, pageSize = 10) => async dispatch => {
  dispatch(getArticlesRequest());
  if (navigator.onLine) {
    try {
      const response = await axios.get('/articles', {
        params: {
          offset,
          limit: pageSize,
        },
      });
      if (response.status === 200) {
        const articles = await response.data.articles;
        const articlesCount = await response.data.articlesCount;
        dispatch(getArticlesSuccess(articles, articlesCount));
      }
    } catch (error) {
      showMessageNetError(error);
      dispatch(getArticlesSuccess());
    }
  } else {
    dispatch(getArticlesFailure());
    message.error('Please check your network connectivity');
  }
};
