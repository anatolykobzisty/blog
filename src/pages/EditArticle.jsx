import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import pick from 'lodash/pick';
import size from 'lodash/size';

import styled from 'styled-components/macro';

import Loader from '../components/Loader';
import ArticleForm from '../components/ArticleForm';

import { editArticle } from '../actions/editArticle';
import { getArticle } from '../actions/getArticle';
import cleanArticle from '../actions/cleanArticle';

const StyledEditArticle = styled.div`
  display: flex;
  justify-content: center;
`;

class EditArticle extends Component {
  state = {
    isSubmitted: false,
  };

  componentDidMount = () => {
    const { match, fetchArticle } = this.props;
    const { slug } = match.params;
    fetchArticle(slug);
  };

  setUpdateValuesForm() {
    const { article } = this.props;
    if (size(article)) {
      const updateValuesForm = pick(article, ['title', 'description', 'body', 'tagList']);
      return updateValuesForm;
    }
    return {};
  }

  handleFormSubmit = values => {
    const { match, updateArticle } = this.props;
    const { slug } = match.params;
    updateArticle(slug, values);
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
          <StyledEditArticle>
            <ArticleForm
              handleFormSubmit={this.handleFormSubmit}
              error={error}
              updateValues={this.setUpdateValuesForm()}
            />
          </StyledEditArticle>
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
    updateArticle: (slug, values) => dispatch(editArticle(slug, values)),
    fetchArticle: slug => dispatch(getArticle(slug)),
    emptyArticle: () => dispatch(cleanArticle()),
  };
};

EditArticle.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  article: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
};

EditArticle.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
