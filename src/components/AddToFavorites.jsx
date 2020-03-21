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
  isAuthenticated,
}) => {
  const handleClick = () => {
    const method = isFavorited ? 'delete' : 'post';
    handleAddToFavorites(method, slug);
  };

  return (
    <>
      <StyledAddToFavorites onClick={handleClick} loading={isLoading} disabled={!isAuthenticated}>
        {!isLoading ? (
          <>
            <Icon
              type="heart"
              theme={isFavorited ? 'filled' : 'outlined'}
              style={{ fontSize: '13px', color: '#1890ff' }}
            />
            <span>&nbsp;{favoritesCount}</span>
          </>
        ) : null}
      </StyledAddToFavorites>
    </>
  );
};

const mapStateToProps = ({ user, multipleArticles }) => {
  return {
    isLoading: multipleArticles.loadingAddToFavorites,
    isAuthenticated: !!user.currentUser.token,
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
  isLoading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavorites);
