import { message } from 'antd';
import axios from '../axios';
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
      if (error.response.status === 404) {
        dispatch(handleLikeArticleFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(handleLikeArticleFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(handleLikeArticleFailure());
        message.error('Unauthorized requests');
      } else {
        dispatch(handleLikeArticleFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(handleLikeArticleFailure());
    message.error('Please check your network connectivity');
  }
};
