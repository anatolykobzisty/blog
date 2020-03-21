import { message } from 'antd';
import axios from '../axios';

import showMessageNetError from '../utils/showMessageNetError';

import {
  HANDLE_LIKE_ARTICLE_REQUEST,
  HANDLE_LIKE_ARTICLE_SUCCESS,
  HANDLE_LIKE_ARTICLE_FAILURE,
} from './actionTypes';

export const handleLikeArticleRequest = () => {
  return {
    type: HANDLE_LIKE_ARTICLE_REQUEST,
  };
};

export const handleLikeArticleSuccess = article => {
  return {
    type: HANDLE_LIKE_ARTICLE_SUCCESS,
    article,
  };
};

export const handleLikeArticleFailure = () => {
  return {
    type: HANDLE_LIKE_ARTICLE_FAILURE,
  };
};

export const handleLikeArticle = (method, slug) => async dispatch => {
  dispatch(handleLikeArticleRequest());
  if (navigator.onLine) {
    try {
      const response = await axios({ method: `${method}`, url: `/articles/${slug}/favorite` });
      if (response.status === 200) {
        const article = await response.data.article;
        dispatch(handleLikeArticleSuccess(article));
      }
    } catch (error) {
      showMessageNetError(error);
      dispatch(handleLikeArticleFailure());
    }
  } else {
    dispatch(handleLikeArticleFailure());
    message.error('Please check your network connectivity');
  }
};
