import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import size from 'lodash/size';

import styled from 'styled-components/macro';

import Loader from '../components/Loader';
import ArticleForm from '../components/ArticleForm';

import { addArticle } from '../actions/addArticle';
import cleanArticle from '../actions/cleanArticle';

const StyledCreateArticle = styled.div`
  display: flex;
  justify-content: center;
`;

class CreateArticle extends Component {
  state = {
    isSubmitted: false,
  };

  componentDidMount() {
    const { emptyArticle } = this.props;
    emptyArticle();
  }

  handleFormSubmit = values => {
    const { createArticle } = this.props;
    createArticle(values);
    this.setState({ isSubmitted: true });
  };

  render() {
    const { article, error, isLoading } = this.props;
    const { isSubmitted } = this.state;
    const token = localStorage.getItem('token');

    if (!token) {
      return <Redirect to="/blog/" />;
    }

    if (isSubmitted && size(article)) {
      return <Redirect to={`/blog/articles/${article.slug}`} />;
    }
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <StyledCreateArticle>
            <ArticleForm handleFormSubmit={this.handleFormSubmit} error={error} />
          </StyledCreateArticle>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ singleArticle }) => {
  return {
    isLoading: singleArticle.loading,
    error: singleArticle.error,
    article: singleArticle.article,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createArticle: values => dispatch(addArticle(values)),
    emptyArticle: () => dispatch(cleanArticle()),
  };
};

CreateArticle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  article: PropTypes.objectOf(PropTypes.any).isRequired,
  createArticle: PropTypes.func.isRequired,
  emptyArticle: PropTypes.func.isRequired,
};

CreateArticle.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
