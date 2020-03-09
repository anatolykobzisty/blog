import { message } from 'antd';
import axios from '../axios';

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

export const getArticlesFailure = (error = null) => {
  return {
    type: GET_ARTICLES_FAILURE,
    error,
  };
};

export const getArticles = (offset = 0, pageSize = 10, page) => async dispatch => {
  dispatch(getArticlesRequest());
  if (navigator.onLine) {
    try {
      const response = await axios.get(`/articles?page=${page}`, {
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
      if (error.response.status === 404) {
        dispatch(getArticlesFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(getArticlesFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(getArticlesFailure());
        message.error('Unauthorized requests');
      } else if (error.response.status === 422) {
        dispatch(getArticlesFailure(error.response.data));
      } else {
        dispatch(getArticlesFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(getArticlesFailure());
    message.error('Please check your network connectivity');
  }
};
