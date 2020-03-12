import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import styled from 'styled-components/macro';

import Loader from '../components/Loader';
import ArticleForm from '../components/ArticleForm';

import { addArticle } from '../actions/addArticle';

const StyledCreateArticle = styled.div`
  display: flex;
  justify-content: center;
`;

class CreateArticle extends Component {
  handleFormSubmit = values => {
    const { createArticle } = this.props;
    createArticle(values);
  };

  render() {
    const { isAuthenticated, article, error, isLoading, isSubmitted } = this.props;

    if (!isAuthenticated) {
      return <Redirect to="/blog" />;
    }

    if (isSubmitted) {
      return <Redirect to={`/blog/articles/${article.slug}`} />;
    }
    return (
      <>
        {isLoading && <Loader />}
        <StyledCreateArticle>
          <ArticleForm
            handleFormSubmit={this.handleFormSubmit}
            errors={(error && error.errors) || {}}
          />
        </StyledCreateArticle>
      </>
    );
  }
}

const mapStateToProps = ({ auth, singleArticle }) => {
  return {
    isAuthenticated: !!auth.currentUser.token,
    isLoading: singleArticle.loading,
    error: singleArticle.error,
    article: singleArticle.article,
    isSubmitted: singleArticle.isSubmitted,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createArticle: values => dispatch(addArticle(values)),
  };
};

CreateArticle.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  article: PropTypes.objectOf(PropTypes.any).isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  createArticle: PropTypes.func.isRequired,
};

CreateArticle.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
