import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components/macro';
import { Button, Icon } from 'antd';

import { handleLikeArticle } from '../actions/handleLikeArticle';

const StyledAddToFavorites = styled(Button)`
  width: 60px;
`;

const AddToFavorites = ({
  isFavorited,
  favoritesCount,
  slug,
  handleAddToFavorites,
  isLoading,
  articleResponse,
  slugResponse,
}) => {
  // const isFavoritedWithResponse =
  //   Object.keys(articleResponse).length && slug === slugResponse
  //     ? articleResponse.favorited
  //     : isFavorited;

  // const favoritesCountWithResponse =
  //   Object.keys(articleResponse).length && slug === slugResponse
  //     ? articleResponse.favoritesCount
  //     : favoritesCount;

  const handleClick = () => {
    const method = isFavorited ? 'delete' : 'post';
    handleAddToFavorites(method, slug);
  };

  return (
    <>
      <StyledAddToFavorites onClick={handleClick}>
        <>
          <Icon
            type="heart"
            theme={isFavorited ? 'filled' : 'outlined'}
            style={{ fontSize: '13px', color: '#1890ff' }}
          />
          <span>&nbsp;{favoritesCount}</span>
        </>
      </StyledAddToFavorites>
    </>
  );
};

const mapStateToProps = ({ singleArticle }) => {
  return {
    isLoading: singleArticle.loadingAddToFavorites,
    // articleResponse: singleArticle.article,
    // slugResponse: singleArticle.article.slug,
    // favoritesCountWithResponse: singleArticle.article.favoritesCount,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddToFavorites: (method, slug) => dispatch(handleLikeArticle(method, slug)),
  };
};

AddToFavorites.propTypes = {
  isFavorited: PropTypes.bool.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  handleAddToFavorites: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavorites);
