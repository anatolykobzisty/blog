import { message } from 'antd';
import axios from '../axios';
import { EDIT_ARTICLE_REQUEST, EDIT_ARTICLE_SUCCESS, EDIT_ARTICLE_FAILURE } from './actionTypes';

export const editArticleRequest = () => {
  return {
    type: EDIT_ARTICLE_REQUEST,
  };
};

export const editArticleSuccess = article => {
  return {
    type: EDIT_ARTICLE_SUCCESS,
    article,
  };
};

export const editArticleFailure = (error = null) => {
  return {
    type: EDIT_ARTICLE_FAILURE,
    error,
  };
};

export const editArticle = (slug, { title, description, body, tagList }) => async dispatch => {
  dispatch(editArticleRequest());
  const articleData = {
    article: {
      title,
      description,
      body,
      tagList,
    },
  };
  if (navigator.onLine) {
    try {
      const response = await axios.put(`/articles/${slug}`, articleData);
      if (response.status === 200) {
        const article = await response.data.article;
        dispatch(editArticleSuccess(article));
      }
    } catch (error) {
      if (error.response.status === 404) {
        dispatch(editArticleFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(editArticleFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(editArticleFailure());
        message.error('Unauthorized requests');
      } else if (error.response.status === 422) {
        dispatch(editArticleFailure(error.response.data));
      } else {
        dispatch(editArticleFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(editArticleFailure());
    message.error('Please check your network connectivity');
  }
};
