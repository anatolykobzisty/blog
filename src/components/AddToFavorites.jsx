import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components/macro';
import { Button, Icon } from 'antd';

import { handleLikeArticle } from '../actions/handleLikeArticle';

const StyledAddToFavorites = styled(Button)`
  width: 60px;
`;

const AddToFavorites = ({ isFavorited, favoritesCount, slug, handleAddToFavorites }) => {
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

export default connect(null, mapDispatchToProps)(AddToFavorites);
