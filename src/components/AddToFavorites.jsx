import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components/macro';
import { Button, Icon, message } from 'antd';
import showMessageNetError from '../utils/showMessageNetError';

import axios from '../axios';

import handleLikeArticle from '../actions/handleLikeArticle';

const StyledAddToFavorites = styled(Button)`
  width: 60px;
`;
class AddToFavorites extends Component {
  state = {
    isLoading: false,
  };

  handleClick = async () => {
    const { isFavorited, handleButtonAddToFavorites, slug } = this.props;
    const method = isFavorited ? 'delete' : 'post';
    this.setState({ isLoading: true });
    if (navigator.onLine) {
      try {
        const response = await axios({ method: `${method}`, url: `/articles/${slug}/favorite` });
        if (response.status === 200) {
          const article = await response.data.article;
          handleButtonAddToFavorites(article);
          this.setState({ isLoading: false });
        }
      } catch (error) {
        showMessageNetError(error);
        this.setState({ isLoading: false });
      }
    } else {
      message.error('Please check your network connectivity');
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isFavorited, favoritesCount, isAuthenticated } = this.props;
    const { isLoading } = this.state;
    return (
      <>
        <StyledAddToFavorites
          onClick={this.handleClick}
          loading={isLoading}
          disabled={!isAuthenticated}
        >
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
  }
}

const mapStateToProps = ({ user }) => {
  return {
    isAuthenticated: user.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleButtonAddToFavorites: (method, slug) => dispatch(handleLikeArticle(method, slug)),
  };
};

AddToFavorites.propTypes = {
  isFavorited: PropTypes.bool.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  handleButtonAddToFavorites: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavorites);
