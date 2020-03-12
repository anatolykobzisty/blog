import { message } from 'antd';
import axios from '../axios';
import { ADD_ARTICLE_REQUEST, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_FAILURE } from './actionTypes';

export const addArticleRequest = () => {
  return {
    type: ADD_ARTICLE_REQUEST,
  };
};

export const addArticleSuccess = article => {
  return {
    type: ADD_ARTICLE_SUCCESS,
    article,
  };
};

export const addArticleFailure = (error = null) => {
  return {
    type: ADD_ARTICLE_FAILURE,
    error,
  };
};

export const addArticle = ({ title, description, body, tagList }) => async dispatch => {
  dispatch(addArticleRequest());
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
      const response = await axios.post('/articles', articleData);
      if (response.status === 200) {
        const article = await response.data.article;
        console.log(article);
        dispatch(addArticleSuccess(article));
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 404) {
        dispatch(addArticleFailure());
        message.error('Not found requests');
      } else if (error.response.status === 403) {
        dispatch(addArticleFailure());
        message.error('Forbidden requests');
      } else if (error.response.status === 401) {
        dispatch(addArticleFailure());
        message.error('Unauthorized requests');
      } else if (error.response.status === 422) {
        dispatch(addArticleFailure(error.response.data));
      } else {
        dispatch(addArticleFailure());
        message.error('Something went wrong');
      }
    }
  } else {
    dispatch(addArticleFailure());
    message.error('Please check your network connectivity');
  }
};
