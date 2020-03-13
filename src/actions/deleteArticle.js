import { message } from 'antd';
import axios from '../axios';
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

export const deleteArticleFailure = (error = null) => {
  return {
    type: DELETE_ARTICLE_FAILURE,
    error,
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
      if (error.response.status === 404) {
        dispatch(deleteArticleFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(deleteArticleFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(deleteArticleFailure());
        message.error('Unauthorized requests');
      } else if (error.response.status === 422) {
        dispatch(deleteArticleFailure(error.response.data));
      } else {
        dispatch(deleteArticleFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(deleteArticleFailure());
    message.error('Please check your network connectivity');
  }
};
