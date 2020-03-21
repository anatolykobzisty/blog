import axios from '../axios';

import showMessageNetError from '../utils/showMessageNetError';

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

export const getArticleFailure = () => {
  return {
    type: GET_ARTICLE_FAILURE,
  };
};

export const getArticle = slug => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const response = await axios.get(`/articles/${slug}`);
    if (response.status === 200) {
      const article = await response.data.article;
      dispatch(getArticleSuccess(article));
    }
  } catch (error) {
    showMessageNetError(error);
    dispatch(getArticleFailure());
  }
};
