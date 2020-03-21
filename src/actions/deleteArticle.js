import { message } from 'antd';
import axios from '../axios';
import showMessageNetError from '../utils/showMessageNetError';

import {
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
} from './actionTypes';

export const deleteArticleRequest = () => {
  return {
    type: DELETE_ARTICLE_REQUEST,
  };
};

export const deleteArticleSuccess = () => {
  return {
    type: DELETE_ARTICLE_SUCCESS,
  };
};

export const deleteArticleFailure = () => {
  return {
    type: DELETE_ARTICLE_FAILURE,
  };
};

export const deleteArticle = slug => async dispatch => {
  dispatch(deleteArticleRequest());
  if (navigator.onLine) {
    try {
      const response = await axios.delete(`/articles/${slug}`);
      if (response.status === 200) {
        dispatch(deleteArticleSuccess());
      }
    } catch (error) {
      showMessageNetError(error);
    }
  } else {
    dispatch(deleteArticleFailure());
    message.error('Please check your network connectivity');
  }
};
