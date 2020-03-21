import { HANDLE_LIKE_ARTICLE } from './actionTypes';

const handleLikeArticle = article => {
  return {
    type: HANDLE_LIKE_ARTICLE,
    article,
  };
};
export default handleLikeArticle;
