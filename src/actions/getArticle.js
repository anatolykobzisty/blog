import { message } from 'antd';
import axios from '../axios';

import { GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILURE } from './actionTypes';

export const getArticleRequest = () => {
  return {
    type: GET_ARTICLE_REQUEST,
  };
};

export const getArticleSuccess = article => {
  return {
    type: GET_ARTICLE_SUCCESS,
    article,
  };
};

export const getArticleFailure = (error = null) => {
  return {
    type: GET_ARTICLE_FAILURE,
    error,
  };
};

export const getArticle = slug => async dispatch => {
  dispatch(getArticleRequest());
  if (navigator.onLine) {
    try {
      const response = await axios.get(`/articles/${slug}`);
      if (response.status === 200) {
        const article = await response.data.article;
        dispatch(getArticleSuccess(article));
      }
    } catch (error) {
      if (error.response.status === 404) {
        dispatch(getArticleFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(getArticleFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(getArticleFailure());
        message.error('Unauthorized requests');
      } else if (error.response.status === 422) {
        dispatch(getArticleFailure(error.response.data));
      } else {
        dispatch(getArticleFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(getArticleFailure());
    message.error('Please check your network connectivity');
  }
};
